var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: window.ENV.api_namespace
});

export default ApplicationAdapter;
