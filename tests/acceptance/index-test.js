import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Acceptances - Index page', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('renders with required content', function(){
  visit('/').then(function(){
    var title = find('a.navbar-brand');
    var recentNews = find('.recent-news > .widget-header > h3');
    var topHackers = find('.top-hackers > .widget-header > h3');
    var editorials = find('.recent-editorials > .widget-header > h3');

    equal(title.text(), 'BruteHack alpha', "title is 'BruteHack alpha'");
    equal(recentNews.text(), 'Recent News', 'page contains recent news widget');
    equal(topHackers.text(), 'Top Brute Hackers', 'page contains top hackers widget');
    equal(editorials.text(), 'Recent Editorials', 'page contains recent editorials widget');
  });
});
