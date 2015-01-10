import DS from "ember-data";
import config from '../config/environment';

var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: config.api_namespace,
  host: config.api_host
});

export default ApplicationAdapter;
