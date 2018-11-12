// server.js
// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up the Express app to handle data parsing
const app = express();
const PORT = process.env.PORT || 3000;

// configure Express.js middle-wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// grap the routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// ================================================
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});