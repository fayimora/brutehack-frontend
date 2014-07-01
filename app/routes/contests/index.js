import Ember from "ember";

var ContestsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('contests');
  }
});

export default ContestsIndexRoute;
