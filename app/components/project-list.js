import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['portfolio'],
  classNameBindings: ['projectHidden'],
  projectHidden: true,

  actions: {
    toggleProjectDetail () {
      return this.toggleProperty('projectHidden');
    }
  },
});
