import { PrismaClient } from '../prisma/prisma/generated/client/edge.js';
const prisma = new PrismaClient();
const express = require('express'); 
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
  const filePath = path.join(__dirname, 'public', '/auth/institution/register.html');
  res.sendFile(filePath, (error) => {
    if (error) {
      console.error('Error sending file:', error);
      res.status(500).send('An error occurred on the server.');
    }
  });
  //(path.join(__dirname, 'public', '/auth/institution/register.html'));
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
  console.log('Prisma instance:', prisma);

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
          Programs: Programs.split(','), // Split programs into an array if they are comma-separated
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
