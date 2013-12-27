var attr = DS.attr;

var Contest = DS.Model.extend({
  name: attr(),
  starts: attr(),
  duration: attr(),
  alreadyRegistered: attr('number'),

  questions: DS.hasMany('question', {async: true})
});

export default Contest;
