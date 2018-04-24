import config from '../config';

export default {
  get base() {
    return config.apiHost;
  },

  signin() {
    return `${this.base}/signin`;
  },

  signup() {
    return `${this.base}/user`;
  },

  getAppointments() {
    return `${this.base}/appointments`;
  }
};
