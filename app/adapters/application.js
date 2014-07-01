import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: BruteHackENV.api_namespace,
  host: BruteHackENV.api_host
});

export default ApplicationAdapter;
