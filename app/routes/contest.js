import Ember from "ember";

var ContestRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('contest', params.contest_id);
  }
});

export default ContestRoute;
