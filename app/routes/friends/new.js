import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  activate() {

  },
  deactivate() {

  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      var model = controller.get('model');
      model.rollback();
    }
  },
  actions: {
    cancel() {
      this.transitionTo('friends');
    }
  }
});
