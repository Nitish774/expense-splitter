const path = require('path');
const express = require('express');

// Import the Express app exported by js/server.js
const app = require('./js/server');

// Serve static files from the project root (so index.html, css/, js/, assets/ are available)
app.use(express.static(path.join(__dirname)));

// Ensure root serves index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const LISTEN_PORT = process.env.PORT || 3000;
app.listen(LISTEN_PORT, () => {
  console.log(`Expense Splitter app listening on http://localhost:${LISTEN_PORT}`);
});
