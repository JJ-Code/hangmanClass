const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8050;

const db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.use(express.static("public"));

require("./routes/clients-api-routes.js")(app);
require("./routes/trainers-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/login-route.js")(app);
require("./routes/matching-route.js")(app);

db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});