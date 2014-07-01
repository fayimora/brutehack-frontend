var ProblemRoute = Ember.Route.extend({
  model: function (params) {
    return this.modelFor('contest').get('problems').then(function(problems){
      return problems.findBy('id', params.problem_id);
    });
  }
});

export default ProblemRoute;
