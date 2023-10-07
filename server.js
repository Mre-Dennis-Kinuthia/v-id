const express = require('express');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser

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
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

// Serve the register.html page
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/auth/institution/register.html'));
});

// Serve the login.html page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/auth/learner/index.html'));
});

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Your file upload handling code here
  } catch (error) {
    console.error('Error uploading and importing data:', error.message);
    return res.status(500).send('An error occurred during upload and data import.');
  }
});

app.post('/register', async (req, res) => {
  try {
    const { institutionName, email, programs, facilitator, username, password, confirmPassword, agreeTerms } = req.body;

    if (!institutionName || !email || !programs || !facilitator || !username || !password || !confirmPassword || !agreeTerms) {
      return res.status(400).send('Missing data.');
    }

    const user = await prisma.institutionProfile.create({
      data: {
        name: institutionName,
        email,
        institutionName,
        programs,
        facilitator,
        username,
        password,
      },
    });

    console.log('User registered successfully');
    return res.status(200).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error.message);
    return res.status(500).send('An error occurred during user registration.');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send('Missing data.');
    }

    // Your user login logic here

    console.log('User logged in successfully');
    return res.status(200).send('User logged in successfully');
  } catch (error) {
    console.error('Error logging in user:', error.message);
    return res.status(500).send('An error occurred during user login.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
