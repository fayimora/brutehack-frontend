var attr = DS.attr;

var Question = DS.Model.extend({
  title: attr(),
  description: attr(),

  contest: DS.belongsTo('contest')
});

export default Question;
