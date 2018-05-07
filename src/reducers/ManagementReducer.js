import createReducer from '../lib/utils/CreateReducer';
import ManagementConstants from '../constants/ManagementConstants';

const {
  GET_MANAGEMENT_APPOINTMENTS,
  CONFIRM_APPOINTMENT
} = ManagementConstants;

export const getInitialState = () => ({
  loading: false,
  errors: {},
  appointments: []
});

export default createReducer(getInitialState, {
  [`${GET_MANAGEMENT_APPOINTMENTS}_REQUEST`]: (
    state,
    { payload: { shouldReload } }
  ) => ({
    loading: shouldReload,
    errors: {}
  }),
  [`${GET_MANAGEMENT_APPOINTMENTS}_SUCCESS`]: (
    state,
    { payload: { appointments } }
  ) => ({
    loading: false,
    appointments
  }),
  [`${GET_MANAGEMENT_APPOINTMENTS}_FAILURE`]: (
    state,
    { payload: { errors } }
  ) => ({
    loading: false,
    errors
  }),
  [`${CONFIRM_APPOINTMENT}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${CONFIRM_APPOINTMENT}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  })
});
