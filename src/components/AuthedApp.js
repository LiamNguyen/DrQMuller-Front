import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Alert from '../lib/Alert';
import { home, createAppointment } from '../constants/RoutePathConstants';
import AuthInfoManager from '../lib/AuthInfoManager';
import HomeScreen from './screens/HomeScreen';
import CreateAppointmentScreen from './screens/CreateAppointmentScreen';

class AuthedApp extends Component {
  componentDidMount() {
    const {
      location: { pathname },
      locale
    } = this.props;

    if (!AuthInfoManager.isAuthorized() && pathname !== '/') {
      this.props.history.push('/');
      Alert.error(locale, 'not_authorized');
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path={`/${home}`} component={HomeScreen} />
        <Route
          exact
          path={`/${createAppointment}`}
          component={CreateAppointmentScreen}
        />
      </Switch>
    );
  }
}

AuthedApp.propTypes = {
  locale: string.isRequired
};

export default connect(
  state => ({
    locale: state.Localization.locale
  }),
  null
)(AuthedApp);
