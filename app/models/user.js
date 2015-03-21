import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  handle    : attr('string'),

  firstName : attr('string'),

  lastName  : attr('string'),

  email     : attr('string'),

  createdAt : attr('number', {
    defaultValue: function() { return Date.now(); }
  }),

  updatedAt : attr('number', {
    defaultValue: function() { return Date.now(); }
  }),

  lastVisit : attr('number', {
    defaultValue: function() { return Date.now(); }
  }),

  rating    : attr('number', {
    defaultValue: function() { return 0; }
  }),

  location  : attr('string', {
    defaultValue: function() { return ""; }
  }),

  shirtSize : attr('string', {
    defaultValue: function() { return ""; }
  })
});
