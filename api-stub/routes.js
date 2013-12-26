module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    var contests = { "contests": [
      {id: 1, name: "Goodbye 2013", starts: "4pm, 31st January 2014", duration: "75 minutes", already_registered: "32"},
      {id: 2, name: "Welcome 2014", starts: "4pm, 7th January 2014", duration: "75 minutes", already_registered: "46"},
      {id: 3, name: "Contest 101", starts: "4pm, 14th January 2014", duration: "75 minutes", already_registered: "3"}
    ]};

    server.get('/contests', function(req, res) {
      res.send(contests);
    });

    server.get('/contests/:id', function (req, res) {
      var result = contests.contest[req.params.id-1];
      res.send({"contest": result });
    })

  });

};
