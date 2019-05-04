var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var currentUser = req.body
        var friendID = matchFriend(currentUser, friends)        
        friends.push(currentUser);
        res.json(friends[friendID]);        
    });
    var ql = 2;
    function matchFriend(input, data) {
        var results=[0, 100];
        for (var i = 0; i < data.length; i++){
            var result = 0;
            for (var j = 0; j < ql; j++) {
                results += Math.abs(parseInt(input.scores[j])-parseInt(data[i].scores[j]));
            };
            if(results[1] > result) {
                results[0]=i;
                results[1]=result;
            }
            console.log(results[0]); 
        };
        return results[0];               
    }
};