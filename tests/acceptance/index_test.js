var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  visit('/').then(function(){
    var title = find('a.navbar-brand');

    equal(title.text(), 'BruteHack alpha');
  });
});
