import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.handle);
  },

  serialize: function(model) {
    return { handle: model.get('handle') };
  }
});
