import Ember from "ember";

var ProblemRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.modelFor('contest').get('problems');
  }
});

export default ProblemRoute;
