var ContestsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('contest');
  }
});

export default ContestsRoute;
