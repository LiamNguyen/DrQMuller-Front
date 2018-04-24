import createReducer from '../lib/utils/CreateReducer';
import BookingConstants from '../constants/BookingConstants';

const { GET_APPOINTMENTS } = BookingConstants;

export const getInitialState = () => ({
  loading: false,
  errors: {},
  appointments: []
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
  })
});
