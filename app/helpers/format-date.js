import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return moment(value).format('dddd, Do MMMM YYYY, HH:MM A');
});
