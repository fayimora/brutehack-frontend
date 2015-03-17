module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();
  var users = [
    {"lastVisit"  : 1400260914177,
      "handle"    : "fayimora",
      "firstName" : "Fayimora",
      "lastName"  : "Femi-Balogun",
      "email"     : "fayi@fayimora.com",
      "rating"    : 3345,
      "location"  : "London, UK",
      "shirtSize" : "L",
      "id"        : 1,
      "createdAt" : 1388995254177,
      "updatedAt" : 1404602694177
    },
    {"lastVisit"  : 1400260916177,
      "handle"    : "aqib",
      "firstName" : "Aqib",
      "lastName"  : "Mushtaq",
      "email"     : "aqib@mushtaq.me",
      "rating"    : 2345,
      "location"  : "London, UK",
      "shirtSize" : "XL",
      "id"        : 2,
      "createdAt" : 1388995254177,
      "updatedAt" : 1404602694177
    }
  ];

  userRouter.get('/', function(req, res) {
    res.send({
      'user': []
    });
  });

  userRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  userRouter.get('/:id', function(req, res) {
    res.send({
      'user': {
        id: req.params.id
      }
    });
  });

  userRouter.put('/:id', function(req, res) {
    res.send({
      'user': {
        id: req.params.id
      }
    });
  });

  userRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/user', userRouter);
};
