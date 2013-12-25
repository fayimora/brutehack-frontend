var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route("faqs");
  this.route("rankings");
  this.route("login");

  this.resource("contests", function () {
    this.route("contest", {path: ":contest_id"});
  });
});

export default Router;
