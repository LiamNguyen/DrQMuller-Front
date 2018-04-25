import React from 'react';
import { func, string } from 'prop-types';

import Locale from './Locale';

const OptionsPanel = ({ locale, onSignoutClick, style }) => (
  <div className="options-panel" style={style}>
    <div onClick={onSignoutClick}>{Locale[locale].text.signout}</div>
  </div>
);

OptionsPanel.propTypes = {
  locale: string.isRequired,
  onSignoutClick: func.isRequired
};

export default OptionsPanel;
