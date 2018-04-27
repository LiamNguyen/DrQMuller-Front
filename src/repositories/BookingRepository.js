import routes from '../lib/ApiRoutes';
import { checkResponse, get } from '../lib/FetchHelper';

export default {
  getAppointments() {
    return get(routes.getAppointments()).then(checkResponse);
  },
  getAllMachines() {
    return get(routes.getAllMachines()).then(checkResponse);
  }
};
