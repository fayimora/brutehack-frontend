var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route("faqs");
  this.route("rankings");
  this.route("login");
  this.route('user');

  this.resource('contests', function () {
    this.resource('contest', {path: ':contest_id'}, function () {
      this.resource('problem', {path: 'problems/:problem_id'});
    });
  });

  this.route('four-oh-four', {path: '/*path'});
});

Router.reopen({
  location: 'auto'
});

export default Router;
