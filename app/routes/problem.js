import Ember from "ember";

var ProblemRoute = Ember.Route.extend({
  // model: function (params) {
  //   return this.store.modelFor('contest').get('problems');
  //   return this.store.modelFor('contest').get('problems').then(function(problems) {
  //     return problems.findBy('id', params.problem_id);
  //   });
  // }
});

export default ProblemRoute;
