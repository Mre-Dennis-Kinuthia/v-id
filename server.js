const express = require('express');
const multer = require('multer');
const exceljs = require('exceljs');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const prisma = new PrismaClient();

// Middleware setup
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define the storage for the uploaded Excel file
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for uploading Excel file
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
    if (!Array.isArray(rows) || rows.length < 2) {
      return res.status(400).send('No data found in the Excel file.');
    }

    const headers = rows[0];
    const data = rows.slice(1);

    for (const row of data) {
      if (row.length !== headers.length) {
        return res.status(400).send('Inconsistent data found in the Excel file.');
      }

      const record = {};
      for (let i = 0; i < headers.length; i++) {
        record[headers[i]] = row[i];
      }

      await prisma.userProfile.create({ data: record });
    }

    res.send('Data uploaded to PostgreSQL successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during upload.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
