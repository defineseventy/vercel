// Add Express
const express = require("express");

// Initialize Express
const app = express();

//import CORS
const cors = require('cors')

//ENTER CORS CODES HERE
app.options('*', cors());
app.use(cors());

var bodyParser = require('body-parser'); //import body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));//read the x-www-urlencoded, not posting "nested object"
app.use(bodyParser.json()); //use the middleware, make the request body readable to Express

// Create GET request
app.get("/", (req, res) => {
  res.status(200).send({"Results":"Success"});
});

// Create POST request
app.post("/login/", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body.username);
  });

// Export the Express API
module.exports = app;