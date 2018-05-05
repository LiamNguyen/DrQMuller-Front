import React, { Component } from 'react';
import { func, string, object } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppointmentManagementScreen from './screens/AppointmentManagementScreen';
import { appointments } from '../constants/RoutePathConstants';
import TopBar from './common/TopBar';
import AuthInfoManager from '../lib/AuthInfoManager';
import Alert from '../lib/Alert';
import _ from 'lodash';
import UserActions from '../actions/UserActions';

class ManagementAuthedApp extends Component {
  componentWillMount() {
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
            <Route
              path={`${url}/${appointments}`}
              component={AppointmentManagementScreen}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

ManagementAuthedApp.propTypes = {
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
)(ManagementAuthedApp);
