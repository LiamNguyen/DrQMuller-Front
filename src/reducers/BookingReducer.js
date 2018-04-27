import createReducer from '../lib/utils/CreateReducer';
import BookingConstants from '../constants/BookingConstants';

const { GET_APPOINTMENTS, GET_ALL_MACHINES } = BookingConstants;

export const getInitialState = () => ({
  loading: false,
  errors: {},
  appointments: [],
  machines: []
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
  })
});
