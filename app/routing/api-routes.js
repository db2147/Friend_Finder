
var friendsData = require('../data/friends.js'); // created a new variable which requires our friends.js page

module.exports = function (app) {

    app.get('/api/friends', function (req,res) {
        console.log(friendsData);

        res.json(friendsData);  //  
    });

    app.post("/api/friends", function(req, res) {  // when we create a post to this route, I want you to run this function
        var newFriend = req.body;   // body came from the body parser function
        //newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newFriend);
        res.redirect("/");
    
        //characters.push(newFriend); // pushes new character into existing characters array
    
        // res.json(newFriend);  // send new character as a json
    
    });
}