import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Acceptances - Login page', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('login page renders properly', function () {
  visit('/login').then(function () {
    var container = find('div.account-container > div.content');
    var form = container.find('form');
    var loginFields = container.find('form > div.login-fields');
    var loginActions = container.find('form > div.login-actions');

    equal(form.find('h1').text(), 'Sign In', 'Form header exists');
    ok(exists(loginFields.find('input#username')), 'username input field exists');
    ok(exists(loginFields.find('input#password')), 'password input field exists');
  });
});
