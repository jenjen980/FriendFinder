// GET route..displays all possibilities of friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });




  //POST route...handles incoming survey results and compatibility logic
app.post("/api/friends", function(req, res) {
    // var newTable = req.body;
    // newTable.routeName= newTable.customerName;
    // console.log(newTable);
    // table.push(newTable);
    // res.json(newTable);
  });