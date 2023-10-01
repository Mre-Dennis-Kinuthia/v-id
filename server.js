const express = require('express');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

const prisma = new PrismaClient();

// Define storage for the uploaded Excel file
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files from the "public" folder
app.use(express.static('public'));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).send('No file uploaded.');
    }

    const buffer = req.file.buffer;
    const workbook = xlsx.read(buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    if (!worksheet) {
      return res.status(400).send('No worksheet found in the Excel file.');
    }

    const rows = xlsx.utils.sheet_to_json(worksheet);

    await prisma.$transaction(async (prisma) => {
      for (let i = 0; i < rows.length; i++) {
        const { Name, Email, Program } = rows[i];

        console.log(`Row ${i + 2} - Name: ${Name}, Email: ${Email}, Program: ${Program},`);

        if (Name && Email && Program) {
          await prisma.userProfile.create({
            data: {
              Name,
              Email,
              Program,
            },
          });
        } else {
          console.log(`Skipping row ${i + 2} due to missing data.`);
        }
      }
    });

    console.log('Data imported successfully');
    return res.status(200).send('File uploaded and data imported successfully.');
  } catch (error) {
    console.error('Error uploading and importing data:', error.message);
    return res.status(500).send('An error occurred during upload and data import.');
  }
});

app.post('/register', async (req, res) => {
  try {
    const { Name, Email, Institution } = req.body;

    if (!Name || !Email || !Institution) {
      return res.status(400).send('Missing data.');
    }

    const user = await prisma.userProfile.create({
      data: {
        Name,
        Email,
        Institution,
      },
    });
    
    console.log('User registered successfully');
    return res.status(200).send(user);
  } catch (error) {
    console.error('Error registering user:', error.message);
    return res.status(500).send('An error occurred during user registration.');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { Email } = req.body;

    if (!Email) {
      return res.status(400).send('Missing data.');
    }

    const user = await prisma.userProfile.findUnique({
      where: {
        Email,
      },
    });

    if (!user) {
      return res.status(404).send('User not found.');
    }

    console.log('User logged in successfully');
    return res.status(200).send(user);
  } catch (error) {
    console.error('Error logging in user:', error.message);
    return res.status(500).send('An error occurred during user login.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
