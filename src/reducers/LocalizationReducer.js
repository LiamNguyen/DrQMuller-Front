import createReducer from '../lib/utils/CreateReducer';
import LocaleTypes from '../constants/LocaleTypes';

const { english } = LocaleTypes;

export const getInitialState = () => ({
  locale: english
});

export default createReducer(getInitialState, {});
