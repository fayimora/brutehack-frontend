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
    var recentNews = find('div.recent-news > div.widget-header > h3');
    var topHackers = find('div.top-hackers > div.widget-header > h3');
    var editorials = find('div.recent-editorials > div.widget-header > h3');

    equal(title.text(), 'BruteHack alpha');
    equal(recentNews.text(), 'Recent News');
    equal(topHackers.text(), 'Top Brute Hackers');
    equal(editorials.text(), 'Recent Editorials');
  });
});
