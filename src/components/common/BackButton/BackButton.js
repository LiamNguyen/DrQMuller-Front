import React from 'react';
import { func, string, number } from 'prop-types';
import ArrowBack from 'mdi-react/ArrowLeftIcon';

import './style.css';

const BackButton = ({ onClick, fill, size }) => (
  <ArrowBack
    className="back-button"
    onClick={onClick}
    size={size}
    style={{ fill: fill }}
  />
);

BackButton.defaultProps = {
  fill: 'black',
  size: 24
};

BackButton.propTypes = {
  onClick: func.isRequired,
  fill: string,
  size: number
};

export default BackButton;
