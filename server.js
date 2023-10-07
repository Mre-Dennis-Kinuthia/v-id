const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();
const port = process.env.PORT || 3001;



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
    const { institutionName, institutionEmail, Programs, Facilitator, Username, Password, confirmPassword } = req.body;

    if (!institutionName || !institutionEmail || !Programs || !Facilitator || !Username || !Password || !confirmPassword) {
      return res.status(400).send('Missing data.');
    }

    // Check if the password and confirmPassword match
    if (Password !== confirmPassword) {
      return res.status(400).send('Passwords do not match.');
    }

    /*Check if the institution with the same username or email already exists
    const existingInstitution = await prisma.institutionProfile.findFirst({
      where: {
        OR: [
          { username: username },
          { institutionEmail: institutionEmail },
        ],
      },
    });

    if (existingInstitution) {
      return res.status(400).send('Institution with the same username or email already exists.');
    }
'*/
    // Create a new institution profile in the database
    /**
     * Creates a new institution profile in the database.
     * @async
     * @function
     * @param {string} institutionName - The name of the institution.
     * @param {string} email - The email address of the institution.
     * @param {string} programs - A comma-separated string of programs offered by the institution.
     * @param {string} facilitator - The name of the facilitator for the institution.
     * @param {string} username - The username for the institution's account.
     * @param {string} password - The password for the institution's account (should be hashed before storing in production).
     * @returns {Promise<Object>} The newly created institution profile.
     */
    const newUser = await prisma.institutionProfile.create({
      data: {
        institutionName: institutionName,
        institutionEmail: institutionEmail,
        Programs: programs.split(','), // Split programs into an array if they are comma-separated
        Facilitator: facilitator,
        Username: username,
        Password: password, // You should hash the password before storing it in production
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
