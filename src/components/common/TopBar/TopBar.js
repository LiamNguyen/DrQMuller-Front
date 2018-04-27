import React from 'react';

import './style.css';
import Logo from '../Logo';
import UserIcon from '../UserIcon';

const TopBar = () => (
  <div className="top-bar">
    <Logo className="logo" />
    <UserIcon width="60" height="60" />
  </div>
);

export default TopBar;
