import ManagementConstants from '../constants/ManagementConstants';

const {
  GET_MANAGEMENT_APPOINTMENTS,
  CONFIRM_APPOINTMENT
} = ManagementConstants;

export const getManagementAppointments = () => ({
  type: `${GET_MANAGEMENT_APPOINTMENTS}_REQUEST`
});

export const confirmAppointment = appointmentId => ({
  type: `${CONFIRM_APPOINTMENT}_REQUEST`,
  payload: { appointmentId }
});

export default {
  getManagementAppointments,
  confirmAppointment
};
