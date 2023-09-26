const express = require('express');
const multer = require('multer');
const exceljs = require('exceljs');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const { createRecord } = require('./model'); // Import your Prisma model

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i];
      const record = {};
      for (let j = 0; j < headers.length; j++) {
        record[headers[j]] = rowData[j];
      }

      // Insert the record into the database using Prisma
      await createRecord(record); // This function is defined in your Prisma model
    }

    res.send('Data uploaded to PostgreSQL successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during upload.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
