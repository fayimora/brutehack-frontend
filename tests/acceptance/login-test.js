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
    var container = find('.account-container > .content');
    var form = container.find('form');

    equal(form.find('h1').text(), 'Sign In', 'Form header exists');
  });
});
