var App;

module('Acceptances - Rankings page', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('renders table', function () {
  visit('/rankings').then(function() {
    var widget = find('div.rankings');
    var tableName = widget.find('div.widget-header h3').text();
    equal(tableName, 'Overall Rankings');
  });
});
