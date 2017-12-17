var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');  // this is needed so we can write the routes

var app = express();
var PORT = process.env.PORT || 3000;  // this port will work on our localhost
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT); 
    });