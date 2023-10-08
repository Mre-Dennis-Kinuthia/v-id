const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser
const session = require('express-session');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const bcrypt = require('bcrypt');


// Generate a 256-bit (32-byte) random secret key
const secretKey = crypto.randomBytes(32).toString('hex');

const app = express();
const port = process.env.PORT || 3001;

// Define storage for the uploaded Excel file
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(
  session({
    secret: secretKey, // Store the secret key as an environment variable
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true, // Set to true in a production environment with HTTPS
    },
  })
);

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
app.get('/login/learner', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/auth/learner/index.html'));
});

app.get('/login/institution', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/auth/institution/login.html'));
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
    console.log('Request Body:', req.body);

    if (!institutionName || !institutionEmail || !Programs || !Facilitator || !Username || !Password || !confirmPassword) {
      console.log('Missing fields:', { institutionEmail, Programs, Facilitator, Username, Password }); // Debug statement
      return res.status(400).send('Missing data.');
    }

    // Check if the password and confirmPassword match
    if (Password !== confirmPassword) {
      return res.status(400).send('Passwords do not match.');
    }

    // Create a new institution profile in the database
    try {
      const newUser = await prisma.institutionProfile.create({
        data: {
          institutionName: institutionName,
          institutionEmail: institutionEmail,
          Programs: [Programs], // Wrap Programs in an array to store it as an array of strings
          Facilitator: Facilitator,
          Username: Username,
          Password: Password, // You should hash the password before storing it in production
        },
      });

      res.json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to register user', errorMessage: error.message });
    }
  } catch (error) {
    console.error('Error registering user:', error.message);
    return res.status(500).send('An error occurred during user registration.');
  }
});


// Handle Learner login
app.post('/login/learner', async (req, res) => {
  try {
    const { learnerEmail, learnerPassword } = req.body;

    // Check if the learnerEmail and learnerPassword are provided
    if (!learnerEmail || !learnerPassword) {
      return res.status(400).send('Email and password are required.');
    }

    // Search for a learner in your database by email
    const learner = await prisma.learnerProfile.findUnique({
      where: {
        learnerEmail: learnerEmail,
      },
    });
    // If the learner doesn't exist, or the password is incorrect, return an error
    if (!learner || !comparePasswords(learnerPassword, learner.password)) {
      return res.status(401).send('Incorrect learner credentials.');
    }

    // If credentials are valid, you can create a session for the learner
    req.session.user = learner; // Store user data in the session

    // Redirect to the learner dashboard or send a success response
    res.redirect('/learner/dashboard'); // Replace with your actual dashboard URL
  } catch (error) {
    console.error('Error logging in learner:', error.message);
    return res.status(500).send('An error occurred during learner login.');
  }
});

// handle login institution
app.post('/login/institution', async (req, res) => {
  try {
    const { institutionEmail, Password } = req.body;

    if (!institutionEmail || !Password) { 
      return res.status(400).send('Missing data.');
    }

    // Check if the user exists in the database
    const user = await prisma.institutionProfile.findUnique({
      where: {
        institutionEmail: institutionEmail,

      },
    });

    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Verify the password (you should use a secure password hashing library like bcrypt)
    const isPasswordValid = await verifyPassword(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(401).send('Incorrect password.');
    }

    // Authentication successful, create a user session
    req.session.user = user; // Store user data in the session

    // Redirect to the institution dashboard
    res.redirect('public/institution-views/dashboard.html'); // Replace with your actual dashboard URL
  } catch (error) {
    console.error('Error logging in user:', error.message);
    return res.status(500).send('An error occurred during user login.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
