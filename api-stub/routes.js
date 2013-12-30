/*global module*/
module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    var questions = [
      {id: 1, contestId:1, title: "This is the title 1", description: "This is the description 1"},
      {id: 2, contestId:1, title: "This is the title 2", description: "This is the description 2"},
      {id: 3, contestId:1, title: "This is the title 3", description: "This is the description 3"},
      {id: 4, contestId:2, title: "This is the title 4", description: "This is the description 4"},
      {id: 5, contestId:2, title: "This is the title 5", description: "This is the description 5"},
      {id: 6, contestId:3, title: "This is the title 6", description: "This is the description 6"}
    ];

    var contests = { "contests": [
      {id: 1, name: "Goodbye 2013", starts: "4pm, 31st December 2013", duration: "75 minutes", alreadyRegistered: "32", questions: [1,2,3]},
      {id: 2, name: "Welcome 2014", starts: "4pm, 7th January 2014", duration: "75 minutes", alreadyRegistered: "46", questions: [4,5]},
      {id: 3, name: "Contest 101", starts: "4pm, 14th January 2014", duration: "75 minutes", alreadyRegistered: "3", questions: [6]}
    ]};

    function getQuestionsFor(contest_id) {
      var result = questions.filter(function (q){
        return q.contestId === contest_id;
      });
      return result;
    }

    server.get('/contests', function(req, res) {
      res.send(contests);
    });

    server.get('/contests/:id', function (req, res) {
      var id = parseInt(req.params.id);
      var result = contests.contests[id-1];
      res.send({"contest": result, "questions": getQuestionsFor(id) });
    });

    // server.get('/contests/:contest_id/questions', function (req, res) {
    //   var contest_id = parseInt(req.params.contest_id);
    //   var result = questions.filter(function (q){
    //     return q.contestId === contest_id;
    //   });
    //   result = {"questions": result};
    //   res.send(result);
    // });

    server.get('/questions', function (req, res) {
      // console.log("query" + JSON.stringify(req.query, null, 4) + "\n\n");
      // var ids = req.query.ids.map(function(is){ return parseInt(is);});
      var result = [];
      req.query.ids.forEach(function (id) {
        result.push(questions[parseInt(id)-1]);
      });

      res.send({"questions": result});
    });

  });

};
