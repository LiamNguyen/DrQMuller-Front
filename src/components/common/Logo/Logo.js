import React from 'react';

import DrMullerLogo from '../../../assets/images/drmuller-logo.svg';

const Logo = props => (
  <div>
    <img src={DrMullerLogo} {...props} alt="Logo" />
  </div>
);

export default Logo;
