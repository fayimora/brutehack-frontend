import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  createdAt : attr(),
  updatedAt : attr(),
  lastVisit : attr(),
  handle    : attr(),
  firstName : attr(),
  lastName  : attr(),
  email     : attr(),
  rating    : attr(),
  location  : attr(),
  shirtSize : attr()
});
