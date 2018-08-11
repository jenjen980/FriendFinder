//Load data from the friends input
var friendSurvey = require("../data/friends");

var totalDifference = 0;

module.exports = function(app){

// GET route..displays all possibilities of friends
app.get("/api/friends", function(req, res) {
     res.json(friends);
  });

  //POST route...handles incoming survey results and compatibility logic
app.post("/api/friends", function(req, res) {
    //compares friends with the friend array

    var greatMatch = [{
        name:"",
        photo: "",
        matchDifference: 1000
    }];

    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    var totalDifference = 0;

    //loops through the current friends list to get each friends scores
    for(var i=0; i<[friends].length-1; i++){
        console.log(friends[i].name);
        totalDifference = 0;

        //loops through the friends scores and the users scores to get the absolute value between the two
    for(var j=0; j<10; j++){

        totalDifference += (Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[j]))));

        if(totalDifference <= greatMatch.friendDifference){
            greatMatch.name = friends[i].name;
            greatMatch.photo = friends[i].photo;
            greatMatch.matchDifference = totalDifference;
        }
    }
    //push into array
    friends.push(greatMatch);
    }

    //find the best match
    // for(var i=0; i<scoresArray.length; i++){
    //     if(scoresArray[i] <= scoresArray[bestMatch]){
    //         bestMatch=i;
    //     }
    // }

    //return the findings
    // var friendMatch = friendSurvey[bestMatch];
    res.json(greatMatch);
    

    //push to the friendSurvey array
    // friendSurvey.push(req.body);

    // console.log(req.body)
    // res.json(friends);
  });

};
