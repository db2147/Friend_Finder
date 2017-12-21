var friendsData = require('../data/friends.js'); // created a new variable which requires our friends.js page
var newFriend;
module.exports = function (app) {

    app.get('/api/friends', function (req,res) {
        console.log(friendsData);

        res.json(friendsData);  //  
    });

    app.get('/api/you', function (req, res) {
        console.log(newFriend);

        res.json(newFriend);
    })

    app.post("/api/friends", function(req, res) {  // when we create a post to this route, I want you to run this function
        var newFriend = req.body;   // body came from the body parser function
        var parsedFriend = newFriend.scores.map(function (val, index) {
            return parseInt(val);
        });
        newFriend.scores = parsedFriend;
        console.log(newFriend);
        friendsData.push(newFriend);
        res.redirect("/results");
    
        //characters.push(newFriend); // pushes new character into existing characters array
    
        // res.json(newFriend);  // send new character as a json
    
    });
}