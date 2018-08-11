//Dependency for the correct path
var path = require("path");

//for the routes
module.exports = function(app){

    //GET route to display survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  

  //route that leads to homepage
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}