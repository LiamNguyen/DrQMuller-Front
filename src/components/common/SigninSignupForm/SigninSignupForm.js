import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import './style.css';
import Locale from './Locale';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { changeForm } from '../../../lib/ComponentHelper';

class SigninSignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeHrStyle: {},
      signinForm: {},
      signupForm: {}
    };
  }

  handleSigninTabClick = () => {
    this.setState({ activeHrStyle: { marginLeft: '0' } });
  };

  handleSignupTabClick = () => {
    console.log(this.signupUsernameInput);
    this.setState({ activeHrStyle: { marginLeft: '50%' } });
  };

  handleSigninUsernameChange = e => {
    const username = e.target.value;

    changeForm(this.state.signinForm, 'username', username, signinForm => {
      this.setState({ signinForm });
    });
  };

  handleSigninPasswordChange = e => {
    const password = e.target.value;

    changeForm(this.state.signinForm, 'password', password, signinForm => {
      this.setState({ signinForm });
    });
  };

  handleSignin = () => {};

  handleSignupUsernameChange = e => {
    const username = e.target.value;

    changeForm(this.state.signupForm, 'username', username, signupForm => {
      this.setState({ signupForm });
    });
  };

  handleSignupPasswordChange = e => {
    const password = e.target.value;

    changeForm(this.state.signupForm, 'password', password, signupForm => {
      this.setState({ signupForm });
    });
  };

  handleSignupConfirmPasswordChange = e => {
    const confirmPassword = e.target.value;

    changeForm(
      this.state.signupForm,
      'confirmPassword',
      confirmPassword,
      signupForm => {
        this.setState({ signupForm });
      }
    );
  };

  handleSignup = () => {};

  render() {
    return (
      <Tabs className="signin-signup-form">
        <TabLink to="signin-tab" onClick={this.handleSigninTabClick}>
          {Locale.signinTab.title}
        </TabLink>
        <TabLink to="signup-tab" onClick={this.handleSignupTabClick}>
          {Locale.signupTab.title}
        </TabLink>
        <hr className="active-hr" style={this.state.activeHrStyle} />
        <hr className="inactive-hr" />

        <div className="tab-panel">
          <TabContent for="signin-tab">
            <SigninForm
              onSigninUsernameChange={this.handleSigninUsernameChange}
              onSigninPasswordChange={this.handleSigninPasswordChange}
              onSignin={this.handleSignin}
            />
          </TabContent>
          <TabContent for="signup-tab">
            <SignupForm
              onSignupUsernameChange={this.handleSignupUsernameChange}
              onSignupPasswordChange={this.handleSignupPasswordChange}
              onSignupConfirmPasswordChange={
                this.handleSignupConfirmPasswordChange
              }
              onSignup={this.handleSignup}
            />
          </TabContent>
        </div>
      </Tabs>
    );
  }
}

export default SigninSignupForm;
