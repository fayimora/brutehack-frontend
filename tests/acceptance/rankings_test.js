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
    var widgetContent  = find('div.widget-content');
    var tableName = widget.find('div.widget-header h3').text();
    var table = widgetContent.find("table");

    equal(tableName, 'Overall Rankings');
    equal(table.find("thead > tr > th:first").text(), 'Rank', 'Rank is the first column');
  });
});

