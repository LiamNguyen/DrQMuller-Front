import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import './style.css';
import Locale from './Locale';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { changeForm } from '../../../lib/ComponentHelper';
import AuthActions from '../../../actions/AuthActions';

class SigninSignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: Locale[props.Localization.locale],
      activeHrStyle: {},
      signinForm: {},
      signupForm: {
        password: '',
        confirmPassword: ''
      },
      errors: {}
    };
  }

  handleSigninTabClick = () => {
    this.setState({ activeHrStyle: { marginLeft: '0' } });
  };

  handleSignupTabClick = () => {
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

  handleSignin = e => {
    e.preventDefault();

    this.props.signin(this.state.signinForm);
  };

  handleSignupUsernameChange = e => {
    const username = e.target.value;

    changeForm(this.state.signupForm, 'username', username, signupForm => {
      this.setState({ signupForm });
    });
  };

  handleSignupPasswordChange = e => {
    const password = e.target.value;
    const {
      signupForm,
      signupForm: { confirmPassword }
    } = this.state;

    changeForm(signupForm, 'password', password, signupForm => {
      this.setState({ signupForm });
    });
    password === confirmPassword
      ? this.setState({ errors: {} })
      : this.setState({
          errors: { confirmPassword: 'errors.confirmPassword.not_match' }
        });
  };

  handleSignupConfirmPasswordChange = e => {
    const confirmPassword = e.target.value;
    const {
      signupForm,
      signupForm: { password }
    } = this.state;

    changeForm(signupForm, 'confirmPassword', confirmPassword, signupForm => {
      this.setState({ signupForm });
    });

    confirmPassword === password
      ? this.setState({ errors: {} })
      : this.setState({
          errors: { confirmPassword: 'errors.confirmPassword.not_match' }
        });
  };

  handleSignup = e => {
    e.preventDefault();

    this.props.signup(this.state.signupForm);
  };

  render() {
    const { locale, errors: localErrors } = this.state;
    const {
      Auth: { errors }
    } = this.props;

    return (
      <Tabs className="signin-signup-form">
        <TabLink to="signin-tab" onClick={this.handleSigninTabClick}>
          {locale.signinTab.title}
        </TabLink>
        <TabLink to="signup-tab" onClick={this.handleSignupTabClick}>
          {locale.signupTab.title}
        </TabLink>
        <hr className="active-hr" style={this.state.activeHrStyle} />
        <hr className="inactive-hr" />

        <div className="tab-panel">
          <TabContent for="signin-tab">
            <SigninForm
              locale={locale}
              onSigninUsernameChange={this.handleSigninUsernameChange}
              onSigninPasswordChange={this.handleSigninPasswordChange}
              onSignin={this.handleSignin}
            />
          </TabContent>
          <TabContent for="signup-tab">
            <SignupForm
              locale={locale}
              errors={{ ...localErrors, ...errors }}
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

SigninSignupForm.propTypes = {
  signin: func,
  signup: func
};

export default connect(
  state => _.pick(state, ['Auth', 'Localization']),
  dispatch => bindActionCreators({ ...AuthActions }, dispatch)
)(SigninSignupForm);
