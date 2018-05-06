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

  signout() {
    return `${this.base}/signout`;
  },

  getAppointments() {
    return `${this.base}/appointments`;
  },

  getAllMachines() {
    return `${this.base}/machines`;
  },

  getAvailableTime() {
    return `${this.base}/availableTime`;
  },

  createAppointment() {
    return `${this.base}/appointment`;
  },

  cancelAppointment() {
    return `${this.base}/appointment`;
  },

  getOwnInfo() {
    return `${this.base}/user/me`;
  },

  getManagementAppointments() {
    return `${this.base}/management/appointments`;
  },

  confirmAppointment() {
    return `${this.base}/management/appointment/confirm`;
  }
};
