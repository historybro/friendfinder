var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var diff;
        var top = 50;
        var match;
        var currentUser = req.body
        for(var i =0; i < friends.length; i++){
            diff = 0;
            for(var j = 0; j < friends[i].scores.length; j++){
                diff += Math.abs(friends[i].scores[j] + 2)// - currentUser.scores[j])
            }
            if(diff < top){
                top = diff;
                match = friends[i]
            }
        };
        friends.push(currentUser);
        res.json(friends[i]);
    });
};