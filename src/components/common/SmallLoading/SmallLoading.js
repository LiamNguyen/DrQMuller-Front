import React from 'react';
import { string } from 'prop-types';
import Spinner from 'react-spinkit';

import './style.css';

const SmallLoading = ({ text }) => (
  <div className="small-loading">
    <Spinner
      className="spinner"
      name="folding-cube"
      color="#b777ae"
      fadeIn="none"
    />
    {text && <p className="loading-text">{text}</p>}
  </div>
);

SmallLoading.propTypes = {
  text: string
};

SmallLoading.defaultProps = {
  text: null
};

export default SmallLoading;
