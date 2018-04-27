import React from 'react';
import { func, object } from 'prop-types';

import './style.css';
import MUInput from '../MUInput';
import CustomButton from '../CustomButton';

const SigninForm = ({
  locale,
  onSigninUsernameChange,
  onSigninPasswordChange,
  onSignin
}) => (
  <form className="signin-form" onSubmit={onSignin}>
    <MUInput
      type="text"
      autoFocus
      placeholder={locale.placeholders.username}
      onChange={onSigninUsernameChange}
    />
    <MUInput
      type="password"
      placeholder={locale.placeholders.password}
      onChange={onSigninPasswordChange}
    />
    <CustomButton onClick={onSignin} text={locale.signinTab.button.signin} />
  </form>
);

SigninForm.propTypes = {
  locale: object.isRequired,
  onSigninUsernameChange: func.isRequired,
  onSigninPasswordChange: func.isRequired,
  onSignin: func.isRequired
};

export default SigninForm;
