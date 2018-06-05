var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');  // path dependency is needed so we can write the routes

var app = express();
var PORT = process.env.PORT || 3000;  // creating our port which is used below and using the logical or operator to specify port number
 
// telling our app to use bodyparser
app.use(bodyParser.urlencoded({ 
    extended: false 
}))

// parse application/json
app.use(bodyParser.json())

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT); 
    });