import { combineReducers } from 'redux';

import Auth from './AuthReducer';
import Localization from './LocalizationReducer';
import Booking from './BookingReducer';
import User from './UserReducer';
import Management from './ManagementReducer';

export default combineReducers({
  Auth,
  Localization,
  Booking,
  User,
  Management
});
