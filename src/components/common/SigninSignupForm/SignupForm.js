import React from 'react';
import { func } from 'prop-types';

import './style.css';
import MUInput from '../MUInput';
import Locale from './Locale';
import CustomButton from '../CustomButton';

const SignupForm = ({
  onSignupUsernameChange,
  onSignupPasswordChange,
  onSignupConfirmPasswordChange,
  onSignup
}) => (
  <form className="signin-form" onSubmit={onSignup}>
    <MUInput
      type="text"
      autoFocus
      placeholder={Locale.placeholders.username}
      onChange={onSignupUsernameChange}
    />
    <MUInput
      type="password"
      placeholder={Locale.placeholders.password}
      onChange={onSignupPasswordChange}
    />
    <MUInput
      type="password"
      placeholder={Locale.placeholders.confirmPassword}
      onChange={onSignupConfirmPasswordChange}
    />
    <CustomButton onClick={onSignup} text={Locale.signupTab.button.signup} />
  </form>
);

SignupForm.propTypes = {
  onSignupUsernameChange: func.isRequired,
  onSignupPasswordChange: func.isRequired,
  onSignupConfirmPasswordChange: func.isRequired,
  onSignup: func.isRequired
};

export default SignupForm;
