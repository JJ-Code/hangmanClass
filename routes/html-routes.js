// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

    // If no matching route is found default to home. The * breaks api routes
    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "/../public/index.html"));
    // });
}