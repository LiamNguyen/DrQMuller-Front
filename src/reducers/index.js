import { combineReducers } from 'redux';

import Auth from './AuthReducer';
import Localization from './LocalizationReducer';

export default combineReducers({
  Auth,
  Localization
});
