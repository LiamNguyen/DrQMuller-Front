import routes from '../lib/ApiRoutes';
import { checkResponse, get, patch } from '../lib/FetchHelper';

export default {
  getManagementAppointments() {
    return get(routes.getManagementAppointments()).then(checkResponse);
  },
  confirmAppointment(options) {
    return patch(routes.confirmAppointment(), options).then(checkResponse);
  }
};
