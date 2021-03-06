import React, { Component } from 'react';

import './style.css';
import CoverImage from '../../../assets/images/cover-image.jpg';
import Logo from '../../common/Logo';
import SigninSignupForm from '../../common/SigninSignupForm';
import AuthInfoManager from '../../../lib/AuthInfoManager';
import history from '../../../history';
import { authed, home } from '../../../constants/RoutePathConstants';
import FadeWrapper from '../../common/FadeWrapper';

class SigninScreen extends Component {
  componentWillMount() {
    if (AuthInfoManager.isAuthorized()) {
      history.push(`/${authed}/${home}`);
    }
  }

  render() {
    return (
      <div className="signin-screen">
        <div className="image-container">
          <img src={CoverImage} alt="cover" height="100%" />
        </div>
        <div className="signin-panel">
          <Logo className="logo" />
          <SigninSignupForm />
        </div>
      </div>
    );
  }
}

export default FadeWrapper(SigninScreen);
