// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");


// Use morgan logger for logging requests
app.use(logger("dev"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});