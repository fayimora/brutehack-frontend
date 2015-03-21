import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function() {
     var credentials = this.getProperties('identification', 'password');
     this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);
    }
  }
});
