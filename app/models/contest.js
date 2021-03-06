import DS from "ember-data";

var attr = DS.attr;

var Contest = DS.Model.extend({
  author            : attr('string'),
  title             : attr('string'),
  description       : attr('string'),
  createdAt         : attr('string'),
  updatedAt         : attr('string'),
  startTime         : attr('number'),
  duration          : attr(),
  alreadyRegistered : attr('number'),

  problems          : DS.hasMany('problem', {async : true})
});

export default Contest;
