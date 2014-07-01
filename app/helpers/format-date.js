/* globals moment */
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return moment.utc(value).format('dddd, Do MMMM YYYY, hh:mm A');
});
