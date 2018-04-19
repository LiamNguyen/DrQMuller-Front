import AuthConstants from '../constants/AuthConstants';

const { SIGNIN } = AuthConstants;

export const signin = options => ({
  type: `${SIGNIN}_REQUEST`,
  payload: { options }
});

export default {
  signin
};
