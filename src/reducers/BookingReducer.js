import createReducer from '../lib/utils/CreateReducer';
import BookingConstants from '../constants/BookingConstants';

const {
  GET_APPOINTMENTS,
  GET_ALL_MACHINES,
  GET_AVAILABLE_TIME,
  CREATE_APPOINTMENT,
  CANCEL_APPOINTMENT
} = BookingConstants;

export const getInitialState = () => ({
  loading: false,
  loadingAvailableTime: false,
  errors: {},
  appointments: [],
  machines: [],
  availableTime: []
});

export default createReducer(getInitialState, {
  [`${GET_APPOINTMENTS}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${GET_APPOINTMENTS}_SUCCESS`]: (state, { payload: { appointments } }) => ({
    loading: false,
    appointments
  }),
  [`${GET_APPOINTMENTS}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  }),
  [`${GET_ALL_MACHINES}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${GET_ALL_MACHINES}_SUCCESS`]: (state, { payload: { machines } }) => ({
    loading: false,
    machines
  }),
  [`${GET_ALL_MACHINES}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  }),
  [`${GET_AVAILABLE_TIME}_REQUEST`]: () => ({
    loadingAvailableTime: true,
    errors: {}
  }),
  [`${GET_AVAILABLE_TIME}_SUCCESS`]: (
    state,
    { payload: { availableTime } }
  ) => ({
    loadingAvailableTime: false,
    availableTime
  }),
  [`${GET_AVAILABLE_TIME}_FAILURE`]: (state, { payload: { errors } }) => ({
    loadingAvailableTime: false,
    errors
  }),
  [`${CREATE_APPOINTMENT}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${CREATE_APPOINTMENT}_SUCCESS`]: () => ({
    loading: false
  }),
  [`${CREATE_APPOINTMENT}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  }),
  [`${CANCEL_APPOINTMENT}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${CANCEL_APPOINTMENT}_SUCCESS`]: () => ({
    loading: false
  }),
  [`${CANCEL_APPOINTMENT}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  })
});
