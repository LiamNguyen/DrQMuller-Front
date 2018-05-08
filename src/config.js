let env = '';
let apiHost = '';
let appHost = '';

export default {
  init(global) {
    env = global.ENV || 'production';
    apiHost = global.API_HOST || 'https://drqmuller-api.herokuapp.com';
    appHost = global.APP_HOST || 'https://drqmuller.herokuapp.com';
  },

  get apiHost() {
    return apiHost;
  },

  get appHost() {
    return appHost;
  },

  get isProduction() {
    return env === 'production';
  },

  get isDevelopment() {
    return env === 'development';
  },

  get isMobile() {
    return env === 'mobile';
  }
};
