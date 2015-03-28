import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    authenticate: function() {
      var controller = this.get('controller');
      var credentials = controller.getProperties('identification', 'password');
      var session = this.get('session');
      session.authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);
    }
  }
});
