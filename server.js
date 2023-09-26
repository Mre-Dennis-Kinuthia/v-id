const express = require('express');
const multer = require('multer');
const exceljs = require('exceljs');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001; // Use 3001 instead of 3000

const prisma = new PrismaClient();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define the storage for the uploaded Excel file
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ... Previous code ...

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).send('No file uploaded.');
    }

    const buffer = req.file.buffer;
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.getWorksheet(1);
    if (!worksheet) {
      return res.status(400).send('No worksheet found in the Excel file.');
    }

    const rows = worksheet.getSheetValues();
    if (!Array.isArray(rows) || rows.length === 0) {
      return res.status(400).send('No data found in the Excel file.');
    }

    // Assuming the first row contains headers
    const headers = rows[0];
    const data = rows.slice(1);

    // Define your Prisma model and database table structure
    for (const row of data) {
      const record = {};
      for (let i = 0; i < headers.length; i++) {
        record[headers[i]] = row[i];
      }
      // Insert the data into the PostgreSQL database using Prisma
      await prisma.UserProfile.create({ data: record });
    }

    res.send('Data uploaded to PostgreSQL successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during upload.');
  }
});

// ... Continue with the rest of your code ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
