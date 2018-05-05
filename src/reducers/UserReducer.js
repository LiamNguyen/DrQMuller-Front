import createReducer from '../lib/utils/CreateReducer';
import AuthConstants from '../constants/UserConstants';

const { GET_OWN_INFO } = AuthConstants;

export const getInitialState = () => ({
  loading: false,
  errors: {},
  info: {}
});

export default createReducer(getInitialState, {
  [`${GET_OWN_INFO}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${GET_OWN_INFO}_SUCCESS`]: (state, { payload: { info } }) => ({
    loading: false,
    info
  }),
  [`${GET_OWN_INFO}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  })
});
