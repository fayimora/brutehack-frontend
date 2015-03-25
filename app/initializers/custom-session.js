import Ember from "ember";
import Session from "simple-auth/session";
import config from '../config/environment';

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {
        var accessToken = this.get('access_token');

        if(!Ember.isEmpty(accessToken)) {
          var self = this;

          Ember.$.getJSON(config.api_endpoint + '/user/me',function(data) {
            var user = container.lookup('store:main').push('user', data);
            self.set('currentUser', user);
          });
        }
      }.observes('access_token')
    });
  }
};
