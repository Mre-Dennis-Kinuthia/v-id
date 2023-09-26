const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('./generated/client'); // Adjust the path as needed

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;

// Middleware for parsing multipart/form-data (file upload)
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

app.use(express.json());

// Serve your HTML file
app.use(express.static('public'));

app.post('/upload-excel', upload.single('excelFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Assuming the uploaded file is in XLSX format
    const xlsxFile = req.file.buffer;

    // Parse the XLSX file (you'll need to install the 'xlsx' package)
    const XLSX = require('xlsx');
    const workbook = XLSX.read(xlsxFile);

    // Assuming you want to process the first sheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert XLSX data to an array of objects (you might need to adjust this based on your Excel structure)
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Store the data in the database using Prisma
    await prisma.user.createMany({
      data: data.map((item) => ({
        Name: item.Name,
        Email: item.Email,
        Program: item.Program,
        ImageUrl: item.ImageUrl || null,
      })),
    });

    res.status(200).json({ message: 'Data imported successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the file' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
