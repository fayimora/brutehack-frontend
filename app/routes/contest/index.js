import Ember from "ember";

var ContestIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('contest');
  }
});

export default ContestIndexRoute;
