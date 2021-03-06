import React, { Component } from 'react';
import { string, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import _ from 'lodash';

import Alert from '../lib/Alert';
import { createAppointment, home } from '../constants/RoutePathConstants';
import AuthInfoManager from '../lib/AuthInfoManager';
import TopBar from './common/TopBar';
import UserActions from '../actions/UserActions';
import CreateAppointmentScreen from './screens/CreateAppointmentScreen';
import HomeScreen from './screens/HomeScreen';

class AuthedApp extends Component {
  componentDidMount() {
    const {
      location: { pathname },
      locale,
      User: { info },
      getOwnInfo
    } = this.props;

    if (!AuthInfoManager.isAuthorized() && pathname !== '/') {
      this.props.history.push('/');
      Alert.error(locale, 'not_authorized');
      return;
    }
    if (_.isEmpty(info)) {
      getOwnInfo();
    }
  }

  render() {
    const {
      match: { url }
    } = this.props;

    return (
      <div className="authed-app">
        <TopBar />
        <div className="authed-app-content">
          <Switch>
            <Route path={`${url}/${home}`} component={HomeScreen} />
            <Route
              exact
              path={`${url}/${createAppointment}`}
              component={CreateAppointmentScreen}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

AuthedApp.propTypes = {
  locale: string.isRequired,
  getOwnInfo: func.isRequired,
  User: object.isRequired
};

export default connect(
  state => ({
    locale: state.Localization.locale,
    ..._.pick(state, ['User'])
  }),
  dispatch => bindActionCreators({ ...UserActions }, dispatch)
)(AuthedApp);
