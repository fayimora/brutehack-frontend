module.exports = function(app) {
  var express = require('express');
  var problemsRouter = express.Router();
  var problems = [
    {
      "id": 1,
      "createdAt": 1388995254177,
      "updatedAt": 1404602694177,
      "author": "Fayimora",
      "title": "This is the title 1",
      "description": "This is the description 1",
      "hint": "This is the hint",
      "inputs": [
        "I1",
        "I2"
      ],
      "outputs": [
        "O1",
        "O2"
      ]
    },
    {
      "id": 2,
      "createdAt": 1388995254177,
      "updatedAt": 1404602694177,
      "author": "Fayimora",
      "title": "This is the title 2",
      "description": "This is the description 2",
      "hint": "This is the hint",
      "inputs": [
        "I1",
        "I2"
      ],
      "outputs": [
        "O1",
        "O2"
      ]
    },
    {
      "id": 3,
      "createdAt": 1388995254177,
      "updatedAt": 1404602694177,
      "author": "Fayimora",
      "title": "This is the title 3",
      "description": "This is the description 3",
      "hint": "This is the hint",
      "inputs": [
        "I1",
        "I2"
      ],
      "outputs": [
        "O1",
        "O2"
      ]
    },
    {
      "id": 4,
      "createdAt": 1388995254177,
      "updatedAt": 1404602694177,
      "author": "Fayimora",
      "title": "This is the title 4",
      "description": "This is the description 4",
      "hint": "This is the hint",
      "inputs": [
        "I1",
        "I2"
      ],
      "outputs": [
        "O1",
        "O2"
      ]
    },
    {
      "id": 5,
      "createdAt": 1388995254177,
      "updatedAt": 1404602694177,
      "author": "Fayimora",
      "title": "This is the title 5",
      "description": "This is the description 5",
      "hint": "This is the hint",
      "inputs": [
        "I1",
        "I2"
      ],
      "outputs": [
        "O1",
        "O2"
      ]
    },
    {
      "id": 6,
      "createdAt": 1388995254177,
      "updatedAt": 1404602694177,
      "author": "Fayimora",
      "title": "This is the title 6",
      "description": "This is the description 6",
      "hint": "This is the hint",
      "inputs": [
        "I1",
        "I2"
      ],
      "outputs": [
        "O1",
        "O2"
      ]
    }
  ];

  problemsRouter.get('/', function(req, res) {
    res.send({
      'problems': problems
    });
  });

  problemsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  problemsRouter.get('/:id', function(req, res) {
    res.send({
      'problems': problems[req.params.id-1]
    });
  });

  problemsRouter.put('/:id', function(req, res) {
    res.send({
      'problems': {
        id: req.params.id
      }
    });
  });

  problemsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/problems', problemsRouter);
};
