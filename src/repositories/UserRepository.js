import routes from '../lib/ApiRoutes';
import { checkResponse, get } from '../lib/FetchHelper';

export default {
  getOwnInfo() {
    return get(routes.getOwnInfo()).then(checkResponse);
  }
};
