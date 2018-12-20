
var path = require("path");
var friends =  require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/survey.html"));
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
