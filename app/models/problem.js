import DS from "ember-data";

var attr = DS.attr;

var Problem = DS.Model.extend({
  createdAt   : attr(),
  updatedAt   : attr(),
  author      : attr(),
  title       : attr(),
  description : attr(),
  inputs      : attr(),
  outputs     : attr(),

  contest     : DS.belongsTo('contest')
});

export default Problem;
