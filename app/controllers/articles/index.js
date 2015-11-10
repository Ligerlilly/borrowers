import Ember from 'ember';

export default Ember.Controller.extend({
  contentDidChange: Ember.observer('model.[]', () => {
    console.log('Called weh we add or remove an article');
  }),
  stateDidChange: Ember.observer('model.@each.state', () => {
    console.log('Called when the state property for any of the articles');
  }),
  possibleStates: ["borrowed", "returned"]
});
