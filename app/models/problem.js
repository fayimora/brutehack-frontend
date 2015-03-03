import DS from "ember-data";

var attr = DS.attr;

var Problem = DS.Model.extend({
  createdAt   : attr('number'),
  updatedAt   : attr('number'),
  author      : attr('string'),
  title       : attr('string'),
  description : attr('string'),
  hint        : attr('string'),
  inputs      : attr(),
  outputs     : attr(),

  contest     : DS.belongsTo('contest')
});

export default Problem;
