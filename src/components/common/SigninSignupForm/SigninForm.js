import React from 'react';
import { func } from 'prop-types';

import './style.css';
import MUInput from '../MUInput';
import Locale from './Locale';
import CustomButton from '../CustomButton';

const SigninForm = ({
  onSigninUsernameChange,
  onSigninPasswordChange,
  onSignin
}) => (
  <form className="signin-form" onSubmit={onSignin}>
    <MUInput
      type="text"
      autoFocus
      placeholder={Locale.placeholders.username}
      onChange={onSigninUsernameChange}
    />
    <MUInput
      type="password"
      placeholder={Locale.placeholders.password}
      onChange={onSigninPasswordChange}
    />
    <CustomButton onClick={onSignin} text={Locale.signinTab.button.signin} />
  </form>
);

SigninForm.propTypes = {
  onSigninUsernameChange: func.isRequired,
  onSigninPasswordChange: func.isRequired,
  onSignin: func.isRequired
};

export default SigninForm;
