// server.js

const express = require('express');
const session = require('express-session');
const nodemailer = require('nodemailer');
const prisma = require('./generated/client');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

// Serve static files and set up your HTML and CSS
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle user registration and email verification
app.post('/register', async (req, res) => {
  const { email } = req.body;

  // Generate a random token (you may want to use a library for secure token generation)
  const token = 'randomTokenHere';

  try {
    // Save the user and token to the database
    const user = await prisma.user.create({
      data: {
        email,
        token,
      },
    });

    // Send an email with the verification link (you need to set up nodemailer)
    const transporter = nodemailer.createTransport({
      service: 'your_email_service',
      auth: {
        user: 'your_email_username',
        pass: 'your_email_password',
      },
    });

    const mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Email Verification',
      text: `Click this link to verify your email: http://localhost:${PORT}/verify/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Email sending failed');
      } else {
        console.log(`Email sent: ${info.response}`);
        res.send('Registration successful. Please check your email for verification.');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Registration failed');
  }
});

app.get('/verify/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const user = await prisma.user.findFirst({
      where: {
        token,
      },
    });

    if (user) {
      // Mark the user as verified and remove the token
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          verified: true,
          token: null,
        },
      });

      // Redirect the user to the virtual ID page
      res.redirect('/virtual-id');
    } else {
      res.status(404).send('Token not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Verification failed');
  }
});
z
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
