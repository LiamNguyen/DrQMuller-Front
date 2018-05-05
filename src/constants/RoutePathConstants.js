export const signin = 'signin';
export const authed = 'authed';
export const home = 'home';
export const createAppointment = 'create-appointment';
export const management = 'management';
export const appointments = 'appointments';
export const isNormalRoute = route =>
  [`/${authed}/${home}`, `/${authed}/${createAppointment}`].includes(route);
export const isManagementRoute = route =>
  [`/${management}/${appointments}`].includes(route);
