import Ember from "ember";
import Session from "simple-auth/session";

// export function initialize(#<{(| container, application |)}>#) {
//   // application.inject('route', 'foo', 'service:foo');
// }

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {
        var accessToken = this.get('access_token');

        if(!Ember.isEmpty(accessToken)) {
          var self = this;

          Ember.$.getJSON('http://localhost:9000/api/user/me',function(data) {
            console.log("================================");
            console.log(data);
            var user = container.lookup('store:main').push('user', data);
            self.set('currentUser', user);
          });
        }
      }.observes('access_token')
    });
  }
};
