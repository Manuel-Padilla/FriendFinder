// creating path package
const path = require("path");

// building routes in module.exports function, paths will later be included in the server
module.exports = function (app) {

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

// creating a route for homepage
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"))
  });
}