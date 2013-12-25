var attr = DS.attr;

var Contest = DS.Model.extend({
  name: attr(),
  starts: attr(),
  duration: attr(),
  already_registered: attr('number')
});

export default Contest;
