import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  frontEnd: DS.attr('string'),
  backEnd: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  user: DS.belongsTo('user', { async: true }),
  editable: DS.attr('boolean'),
});
