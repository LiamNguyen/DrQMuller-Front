import createReducer from '../lib/utils/CreateReducer';
import AuthConstants from '../constants/AuthConstants';

const { SIGNIN, SIGNUP, SIGNOUT } = AuthConstants;

export const getInitialState = () => ({
  loading: false,
  errors: {}
});

export default createReducer(getInitialState, {
  [`${SIGNIN}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${SIGNIN}_SUCCESS`]: () => ({ loading: false }),
  [`${SIGNIN}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  }),
  [`${SIGNUP}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${SIGNUP}_SUCCESS`]: () => ({ loading: false }),
  [`${SIGNUP}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  }),
  [`${SIGNOUT}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${SIGNOUT}_SUCCESS`]: () => ({ loading: false }),
  [`${SIGNOUT}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  })
});
