/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'brute-hack',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.api_namespace = 'api';
    // ENV.api_host = 'http://localhost:9000';

    ENV.contentSecurityPolicy = {
        'default-src': "'none'",
        'script-src': "'self' 'unsafe-inline'",
        'font-src': "'self' http://themes.googleusercontent.com",
        'connect-src': "'self'",
        'img-src': "'self'",
        'style-src': "'self'",
        'media-src': "'self'"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.api_namespace = 'api';
    ENV.api_host = 'http://brutehack-backend.herokuapp.com';
  }

  return ENV;
};
