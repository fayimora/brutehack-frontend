import Ember from 'ember';

export default Ember.Controller.extend({
  inLogin: function () {
    return this.get('currentRouteName') === 'login';
  }.property('currentRouteName')
});
