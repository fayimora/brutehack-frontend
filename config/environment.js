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
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.api_namespace = 'api';
    ENV.api_host = 'http://localhost:4200';
    ENV.api_endpoint = ENV.api_host+'/'+ENV.api_namespace

    ENV.contentSecurityPolicy = {
        'default-src': "'none'",
        'script-src': "'self' 'unsafe-inline'",
        'font-src': "'self' http://themes.googleusercontent.com",
        'connect-src': "'self'",
        'img-src': "'self'",
        'style-src': "'self'",
        'media-src': "'self'"
    };

    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:local-storage',
      crossOriginWhitelist: ['http://localhost:9000'],
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
    };

    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: ENV.api_host+'/oauth2/access_token'
    };

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

    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: '/oauth2/access_token',
    };

  }

  return ENV;
};
