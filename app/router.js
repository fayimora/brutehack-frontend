import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BruteHackENV.locationType
});

Router.map(function() {
  this.route("faqs");
  this.route("rankings");
  this.route("login");
  this.route("signup");
  this.route('user');

  this.resource('contests', function () {
    this.resource('contest', {path: ':contest_id'}, function () {
      this.resource('problem', {path: 'problems/:problem_id'});
    });
  });

  this.route('four-oh-four', {path: '/*path'});
});

export default Router;
