var App;

module('Acceptances - FAQs page', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('renders the necessary content', function(){
  visit('/faqs').then(function(){
    var faqsHeader = find('div.widget-header > h3');
    var askButton = find('a.btn.btn-support-ask');
    var contactButton = find('a.btn.btn-support-contact');

    equal(faqsHeader.text(), 'Frequently Asked Questions');
    equal(askButton.text(), 'Ask A Question');
    equal(contactButton.text(), 'Contact Support');
  });
});
