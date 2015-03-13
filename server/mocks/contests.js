module.exports = function(app) {
  var express = require('express');
  var contestsRouter = express.Router();
  var contests = [
    {
      "id": 1,
      "createdAt": 1388995254177,
      "updatedAt": 1404602694177,
      "author": "Fayi QLL",
      "title": "Goodbye 2013",
      "description": "This is the description",
      "startTime": 1404602694177,
      "duration": "75mins",
      "problems": [1, 2, 3 ]
    },
    {
      "id": 2,
      "createdAt": 1392019254177,
      "updatedAt": 1404602694177,
      "author": "Fayi QLL",
      "title": "Welcome 2014",
      "description": "This is the description",
      "startTime": 1404602694177,
      "duration": "75mins",
      "problems": [4, 5 ]
    },
    {
      "id": 3,
      "createdAt": 1393833654177,
      "updatedAt": 1404602694177,
      "author": "Fayi QLL",
      "title": "Sprint #101",
      "description": "This is the description",
      "startTime": 1404602694177,
      "duration": "60mins",
      "problems": [6]
    }
  ];

  contestsRouter.get('/', function(req, res) {
    res.send({
      'contests': contests
    });
  });

  contestsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  contestsRouter.get('/:id', function(req, res) {
    res.send({
      'contest': contests[req.params.id-1]
    });
  });

  contestsRouter.put('/:id', function(req, res) {
    res.send({
      'contests': {
        id: req.params.id
      }
    });
  });

  contestsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/contests', contestsRouter);
};
