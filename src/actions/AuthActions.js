import AuthConstants from '../constants/AuthConstants';

const { SIGNIN, SIGNUP, SIGNOUT } = AuthConstants;

export const signin = options => ({
  type: `${SIGNIN}_REQUEST`,
  payload: { options }
});

export const signup = options => ({
  type: `${SIGNUP}_REQUEST`,
  payload: { options }
});

export const signout = () => ({
  type: `${SIGNOUT}_REQUEST`
});

export default {
  signin,
  signup,
  signout
};
