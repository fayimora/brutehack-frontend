import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("faqs");
  this.route("rankings");
  this.route("login");
  this.route("signup");
  this.route('user', {path: 'user/:user_handle'});

  this.resource('contests');
  this.resource('contest', {path: 'contest/:contest_id'}, function () {
    this.resource('problem', {path: 'problem/:problem_id'});
    this.route('submission', {path: 'submit'});
  });

  this.route('four-oh-four', {path: '/*path'});
});

export default Router;
