import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  createdAt : attr('number'),
  updatedAt : attr('number'),
  lastVisit : attr('number'),
  handle    : attr('string'),
  firstName : attr('string'),
  lastName  : attr('string'),
  email     : attr('string'),
  rating    : attr('number'),
  location  : attr(),
  shirtSize : attr('string')
});
