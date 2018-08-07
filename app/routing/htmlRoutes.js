//GET route to display survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  

  //route that leads to homepage
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });