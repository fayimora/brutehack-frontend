module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    server.get('/', function(req, res) {
      res.send({"name": "Fayimora", "app": "BruteHack"});
    });

  });

};
