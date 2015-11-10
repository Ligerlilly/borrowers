import Ember from 'ember';

export default Ember.Controller.extend({
  sortAscending: true,
//
// We'll use sortBy to hold the name of the field we want to sort by. //
sortBy: 'firstName', actions: {
  setSortBy: function(fieldName) {
  this.set('sortBy', fieldName);
  this.toggleProperty('sortAscending');
  console.log('Sorting by ', fieldName);
  console.log('Sorting Asc?: ', this.get('sortAscending'));
  return false;
  }
}
});
