var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var userScore = user.values;        
        var bestMatch = 50;
        for (var i = 0; i < friends.length; i++){
            var diff = 0;
            for (var j = 0; j < userScore.length; j++) {
                diff += Math.abs(friends[i].values[j] - userScore[j]);
            }
            if (diff < bestMatch) {
                bestMatch = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        friends.push(user);
        res.json(user);
    });
};