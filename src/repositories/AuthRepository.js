import routes from '../lib/ApiRoutes';
import { checkResponse, post } from '../lib/FetchHelper';

export default {
  signin(options) {
    return post(routes.signin(), options).then(checkResponse);
  }
};
