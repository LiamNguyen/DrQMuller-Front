import BookingConstants from '../constants/BookingConstants';

const {
  GET_APPOINTMENTS,
  GET_ALL_MACHINES,
  GET_AVAILABLE_TIME,
  CREATE_APPOINTMENT
} = BookingConstants;

export const getAppointments = () => ({
  type: `${GET_APPOINTMENTS}_REQUEST`
});

export const getAllMachines = () => ({
  type: `${GET_ALL_MACHINES}_REQUEST`
});

export const getAvailableTime = options => ({
  type: `${GET_AVAILABLE_TIME}_REQUEST`,
  payload: { options }
});

export const createAppointment = options => ({
  type: `${CREATE_APPOINTMENT}_REQUEST`,
  payload: { options }
});

export default {
  getAppointments,
  getAllMachines,
  getAvailableTime,
  createAppointment
};
