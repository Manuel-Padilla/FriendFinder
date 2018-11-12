// require in data from friends.js
var friends = require('../data/friends.js');

// build route to view all of friends
module.exports = function (app) {

  // display all friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 100
    };

    console.log(req.body);

    // result of user's survey POST and parse it
    let userData = req.body;
    let userScores = userData.scores;

    console.log(userScores);

    // difference between user and user's scores in the database is calculated
    let totalDifference = 0;

    // Nested for loop, loop through friend possibilites in database
    for (var i = 0; i < friends.length; i++) {

      console.log(friends[i]);
      totalDifference = 0;

      // loop through all scores of each friend
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // totalDifference takes the sum of the difference calculated between the scores
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // if the sum of totalDifferences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.friendDifference) {

          // reset the bestMatch to be the new best friend
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    // user's data is then saved to the database.
    friends.push(userData);

    // return new bestMatch object in JSON format back to frontend app
    res.json(bestMatch);
  });

};