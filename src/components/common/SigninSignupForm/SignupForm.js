import React from 'react';
import { func, object } from 'prop-types';
import _ from 'lodash';

import './style.css';
import MUInput from '../MUInput';
import CustomButton from '../CustomButton';

const SignupForm = ({
  locale,
  errors,
  onSignupUsernameChange,
  onSignupPasswordChange,
  onSignupConfirmPasswordChange,
  onSignup
}) => (
  <form className="signin-form" onSubmit={onSignup}>
    <MUInput
      type="text"
      autoFocus
      placeholder={locale.placeholders.username}
      onChange={onSignupUsernameChange}
      failReason={_.get(locale, errors.username)}
    />
    <MUInput
      type="password"
      placeholder={locale.placeholders.password}
      onChange={onSignupPasswordChange}
      failReason={_.get(locale, errors.password)}
    />
    <MUInput
      type="password"
      placeholder={locale.placeholders.confirmPassword}
      onChange={onSignupConfirmPasswordChange}
      failReason={_.get(locale, errors.confirmPassword)}
    />
    <CustomButton
      onClick={onSignup}
      text={locale.signupTab.button.signup}
      disabled={errors.confirmPassword}
    />
  </form>
);

SignupForm.propTypes = {
  locale: object.isRequired,
  errors: object,
  onSignupUsernameChange: func.isRequired,
  onSignupPasswordChange: func.isRequired,
  onSignupConfirmPasswordChange: func.isRequired,
  onSignup: func.isRequired
};

export default SignupForm;
