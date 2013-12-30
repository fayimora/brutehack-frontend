var ApplicationAdapter = DS.RESTAdapter.extend({
  host: window.ENV.api_host,
  namespace: window.ENV.api_namespace
});

export default ApplicationAdapter;
