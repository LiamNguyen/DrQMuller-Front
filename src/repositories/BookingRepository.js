import routes from '../lib/ApiRoutes';
import { checkResponse, get, post, patch } from '../lib/FetchHelper';

export default {
  getAppointments() {
    return get(routes.getAppointments()).then(checkResponse);
  },
  getAllMachines() {
    return get(routes.getAllMachines()).then(checkResponse);
  },
  getAvailableTime(query) {
    return get(routes.getAvailableTime(), query).then(checkResponse);
  },
  createAppointment(options) {
    return post(routes.createAppointment(), options).then(checkResponse);
  },
  cancelAppointment(options) {
    return patch(routes.cancelAppointment(), options).then(checkResponse);
  }
};
