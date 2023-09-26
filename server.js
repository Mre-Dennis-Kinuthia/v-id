const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the path to your HTML file
const htmlFilePath = path.join(__dirname, 'public', 'import.html');

// Serve static files (e.g., CSS, images) from the 'public' directory
app.use(express.static('public'));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(htmlFilePath);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
