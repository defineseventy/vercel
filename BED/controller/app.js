var express = require('express'); //get express library
var app = express(); //declare 'app' as the express
// axios.<method> will now provide autocomplete and parameter typing
const cors = require('cors')
//ENTER CORS CODES HERE
app.options('*', cors());
app.use(cors());
//ENTER CORS CODES HERE
var bodyParser = require('body-parser'); //import body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));//read the x-www-urlencoded, not posting "nested object"
app.use(bodyParser.json()); //use the middleware, make the request body readable to Express

app.get("/", (req, res, next) => {  //get correct method, get correct req.url
    res.status(200).send({"Results":"Success"});  //no error and send results
});

module.exports = app;//exports app.js (that holds the api users)