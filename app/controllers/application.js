import Ember from 'ember';

export default Ember.Controller.extend({
  inLoginOrSignup: function () {
    var currentRoute = this.get('currentRouteName');
    return  currentRoute === 'login' || currentRoute === 'signup';
  }.property('currentRouteName')
});
