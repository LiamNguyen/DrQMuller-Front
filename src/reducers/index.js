import { combineReducers } from 'redux';

import Auth from './AuthReducer';
import Localization from './LocalizationReducer';
import Booking from './BookingReducer';

export default combineReducers({
  Auth,
  Localization,
  Booking
});
