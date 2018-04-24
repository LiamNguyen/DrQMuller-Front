import BookingConstants from '../constants/BookingConstants';

const { GET_APPOINTMENTS } = BookingConstants;

export const getAppointments = () => ({
  type: `${GET_APPOINTMENTS}_REQUEST`
});

export default {
  getAppointments
};
