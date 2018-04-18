import React, { Component } from 'react';

import './style.css';
import CoverImage from '../../../assets/images/cover-image.jpg';
import Logo from '../../common/Logo';
import SigninSignupForm from '../../common/SigninSignupForm';

class SigninScreen extends Component {
  render() {
    return (
      <div className="signin-screen">
        <div className="image-container">
          <img src={CoverImage} alt="omega-machine" height="100%" />
        </div>
        <div className="signin-panel">
          <Logo className="logo" />
          <SigninSignupForm />
        </div>
      </div>
    );
  }
}

export default SigninScreen;
