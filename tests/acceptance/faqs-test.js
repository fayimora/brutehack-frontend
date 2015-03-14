import { test, module, equal } from 'ember-qunit';
import startApp from 'brute-hack/tests/helpers/start-app';
import Ember from 'ember';

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
    var faqsHeader = find('.widget-header > h3');
    var askButton = find('a.btn.btn-support-ask');
    var contactButton = find('a.btn.btn-support-contact');

    equal(faqsHeader.text(), 'Frequently Asked Questions', "'Frequently Asked Questions' widget exists");
    equal(askButton.text(), 'Ask A Question', "'Ask A Question' button exists");
    equal(contactButton.text(), 'Contact Support', "'Contact Support' button exists");
  });
});
