module.exports = function(app) {
  var express = require('express');
  var oauthRouter = express.Router();

  oauthRouter.get('/', function(req, res) {
    res.send({
      'oauth': []
    });
  });

  oauthRouter.post('/', function(req, res) {
    // res.status(201).end();
    res.send({
      "Bearer": "access_token",
      "access_token":"2YotnFZFEjr1zCsicMWpAA",
      "refresh_token":"7kyfJFKdub4FFms3ruhcecM",
      "token_type":"Bearer"
    });
  });

  oauthRouter.get('/:id', function(req, res) {
    res.send({
      'oauth': {
        id: req.params.id
      }
    });
  });

  oauthRouter.put('/:id', function(req, res) {
    res.send({
      'oauth': {
        id: req.params.id
      }
    });
  });

  oauthRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/oauth2/access_token', oauthRouter);
};
