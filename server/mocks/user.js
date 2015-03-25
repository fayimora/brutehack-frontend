module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();

  userRouter.get('/me', function(req, res) {
    res.send({
      "lastVisit"  : 1400260914177,
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
    });
  });

  app.use('/api/user', userRouter);
};
