import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Acceptances - Contests page', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('renders table', function () {
  visit('/contests').then(function() {
    var upcomingWidget = find('.upcoming-contests > .widget-header > h3');
    var pastWidget = find('.past-contests > .widget-header > h3');

    equal(upcomingWidget.text(), 'Current and Upcoming Contests', "'Upcoming Contests' widget exists");
    equal(pastWidget.text(), 'Past Contests', "'Past Contests' widget exists");
  });
});

