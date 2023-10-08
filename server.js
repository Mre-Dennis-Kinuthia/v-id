const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'DATABASE_URL',
    },
  },
});
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

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

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

// Server-side code
app.get('/search', async (req, res) => {
  try {
    const name = req.query.name; // Get the name from the query parameter

    // Query the database for a learner with the provided name
    const learner = await prisma.userProfile.findUnique({
      where: {
        Name: name,
      },
    });

    if (learner) {
      // Send the learner's profile as JSON response
      res.json(learner);
    } else {
      // Send a 404 response if no learner is found
      res.status(404).send('No learner found with that name.');
    }
  } catch (error) {
    console.error('Error searching for learner:', error.message);
    res.status(500).send('An error occurred while searching for a learner.');
  }
});


app.use(bodyParser.urlencoded({ extended: true }));

// Serve CSS files with the correct MIME type
app.get('/login/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/auth/institution/styles.css'), {
    headers: {
      'Content-Type': 'text/css', // Set the correct MIME type for CSS
    },
  });
});

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

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
        const { Name, learnerEmail, Program } = rows[i];

        console.log(`Row ${i + 2} - Name: ${Name}, learnerEmail: ${learnerEmail}, Program: ${Program},`);

        if (Name && learnerEmail && Program) {
          await prisma.userProfile.create({
            data: {
              Name,
              learnerEmail,
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


    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create a new institution profile in the database
    try {
      const newUser = await prisma.institutionProfile.create({
        data: {
          institutionName: institutionName,
          institutionEmail: institutionEmail,
          Programs: [Programs], // Wrap Programs in an array to store it as an array of strings
          Facilitator: Facilitator,
          Username: Username,
          Password: hashedPassword, // You should hash the password before storing it in production
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
    const isPasswordValid = await bcrypt.compare(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(401).send('Incorrect password.');
    }

    // Authentication successful, create a user session
    req.session.user = user; // Store user data in the session

    // Redirect to the institution dashboard
    res.redirect('/institution-views/dashboard.html'); // Replace with your actual dashboard URL
  } catch (error) {
    console.error('Error logging in user:', error.message);
    return res.status(500).send('An error occurred during user login.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
