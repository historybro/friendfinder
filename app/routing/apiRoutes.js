var friends = require("../data/friend");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var maxDiff = 50;
        var matchFriend;
        var currentFriend;
        friends.forEach(function (friend) {
            var difference = 0;
            for (var i = 0; i < friends.scores.length; i++) {
                difference += Math.abs(friends.scores[i] - currentFriend.scores[i]);
            }
            if (difference < maxDiff) {
                maxDiff = difference;
                matchFriend = friend;
            };
        });
        res.json(matchFriend);
        friends.push(req.body);
    });
};