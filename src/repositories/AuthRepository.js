import routes from '../lib/ApiRoutes';
import { checkResponse, post } from '../lib/FetchHelper';

export default {
  signin(options) {
    return post(routes.signin(), options).then(checkResponse);
  },

  signup(options) {
    return post(routes.signup(), options).then(checkResponse);
  },

  signout() {
    return post(routes.signout()).then(checkResponse);
  }
};
