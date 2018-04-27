import BookingConstants from '../constants/BookingConstants';

const { GET_APPOINTMENTS, GET_ALL_MACHINES } = BookingConstants;

export const getAppointments = () => ({
  type: `${GET_APPOINTMENTS}_REQUEST`
});

export const getAllMachines = () => ({
  type: `${GET_ALL_MACHINES}_REQUEST`
});

export default {
  getAppointments,
  getAllMachines
};
