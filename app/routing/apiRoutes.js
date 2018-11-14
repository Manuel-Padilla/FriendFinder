// require in data from friends.js
var friendsData = require('../data/friends.js');

// build route to view all of friends
module.exports = function (app) {

  // display all friends
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {

    var newFriend = req.body;
    var newFriendsResponses = newFriend.scores;
    var bestMatch = {
      name: "FRIEND",
      photo: "",
      bestMatchDifference: 500
    };


    // Nested for loop, loop through friend possibilites in database
    for (var i = 0; i < friendsData.length; i++) {

      var diffCounter = 0;

      // loop through all scores of each friend
      for (var j = 0; j < friendsData[i].scores.length; j++) {

        // totalDifference takes the sum of the difference calculated between the scores
        diffCounter += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendsResponses[j]))

      }

        // if the sum of totalDifferences is less then the differences of the current "best match"
        if (bestMatch.bestMatchDifference > diffCounter) {

          // reset the bestMatch to be the new best friend
          bestMatch.name = friendsData[i].name;
          bestMatch.photo = friendsData[i].photo;
          bestMatch.bestMatchDifference = diffCounter;
        }
      
    }

    // user's data is then saved to the database.
    friends.push(userData);

    // return new bestMatch object in JSON format back to frontend app
    res.json(bestMatch);
  });

};