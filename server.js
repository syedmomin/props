const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000; // or any port you prefer

// Enable CORS
app.use(cors());

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'website')));

// Handle all other routes by sending the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'website/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
