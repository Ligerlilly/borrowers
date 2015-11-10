import Ember from 'ember';

export default Ember.Component.extend({
  stateChanged: Ember.observer('article.state',() => {
    var article = this.get('article');
    console.log('Epensive operation because article state changed');
  }),
  tagName: 'tr',
  article: null, // passed-in
  articleStates: null, // passed-in
  actions: {
    saveArticle() {
      let article = this.get('article');

      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
