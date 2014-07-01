import DS from "ember-data";

var attr = DS.attr;

var Problem = DS.Model.extend({
  title: attr(),
  description: attr(),

  contest: DS.belongsTo('contest')
});

export default Problem;
