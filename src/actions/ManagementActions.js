import ManagementConstants from '../constants/ManagementConstants';

const {
  GET_MANAGEMENT_APPOINTMENTS,
  CONFIRM_APPOINTMENT
} = ManagementConstants;

export const getManagementAppointments = (shouldReload = true) => ({
  type: `${GET_MANAGEMENT_APPOINTMENTS}_REQUEST`,
  payload: { shouldReload }
});

export const confirmAppointment = appointmentId => ({
  type: `${CONFIRM_APPOINTMENT}_REQUEST`,
  payload: { appointmentId }
});

export default {
  getManagementAppointments,
  confirmAppointment
};
