var path = require('path');

module.exports = function (app) {

    app.get('/survey', function(req, res) {  // using our get request to designate path
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.get('/results', function(req, res) {  // using our get request to designate path
        res.sendFile(path.join(__dirname + '/../public/results.html'));
    });

    app.use('/', function(req, res) {                                   //saying whenever you get this ("/") for the root, we want to execute this function
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}