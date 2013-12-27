var ContestIndexRoute = Ember.Route.extend({
  model: function () {
    // return this.store.find('contest');
    return this.modelFor('contest');
  }
});

export default ContestIndexRoute;
