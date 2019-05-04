var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var diff;
        var top = 50;
        var match;
        var currentUser = req.body
        for(var i in friends){
            diff = 0;
            for(var j in friends[i].scores){
                diff += Math.abs(friends[i].scores[j] - currentUser.scores[j])
            }
            if(diff < top){
                top = diff;
                match = friends[i]
            }
        }
        friends.push(currentUser)
        res.send([match, top])
    });
};