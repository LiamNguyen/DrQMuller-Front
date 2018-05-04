import moment from 'moment';

export const isAppointmentValid = (date, time, isCancelled) => {
  return !isExpired(date, time) && !isCancelled;
};

export const isExpired = (date, time) => {
  if (!date || !time) return false;

  const schedule = moment(`${date} ${time}`);
  return moment().isAfter(schedule);
};

export default {
  isAppointmentValid,
  isExpired
};
