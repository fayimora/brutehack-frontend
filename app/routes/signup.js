import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createUser: function() {
      var details = this.get('controller').getProperties('handle', 'firstName', 'lastName', 'email', 'password');
      this.store.createRecord('user', details).save();
    }
  }
});
