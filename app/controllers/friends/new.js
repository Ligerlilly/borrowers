import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    concel() {
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});
