import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createUser: function() {
      var details = this.get('controller').getProperties('handle', 'firstName', 'lastName', 'password', 'email');
      console.log(details);
      this.store.createRecord('user', details).save();
    }
  }
});
