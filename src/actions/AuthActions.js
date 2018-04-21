import AuthConstants from '../constants/AuthConstants';

const { SIGNIN, SIGNUP } = AuthConstants;

export const signin = options => ({
  type: `${SIGNIN}_REQUEST`,
  payload: { options }
});

export const signup = options => ({
  type: `${SIGNUP}_REQUEST`,
  payload: { options }
});

export default {
  signin,
  signup
};
