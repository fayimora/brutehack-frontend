var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route("faqs");
  this.route("rankings");
  this.route("login");
  this.route('user');

  this.resource('contests', function () {
    this.resource('contest', {path: ':contest_id'}, function () {
      this.resource('question', {path: 'questions/:question_id'});
    });
  });

  this.route('four-oh-four', {path: '/*path'});
});

Router.reopen({
  location: 'history'
});

export default Router;
