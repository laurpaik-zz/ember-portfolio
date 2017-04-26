import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['portfolio'],
  classNameBindings: ['projectHidden'],
  projectHidden: false,

  actions: {
    toggleProjectDetail () {
      return this.toggleProperty('projectHidden');
    }
  },
});
