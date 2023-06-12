// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.status(200).send({"Results":"Success"});
});

// Export the Express API
module.exports = app;