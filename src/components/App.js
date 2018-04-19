import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Router, Route } from 'react-router-dom';
import Alert from 'react-s-alert';

import history from '../history';
import SigninScreen from './screens/SigninScreen';
import CustomAlertContent from '../components/common/CustomAlertContent';
import AuthedApp from '../components/AuthedApp';
import RoutePathConstants from '../constants/RoutePathConstants';
import LoadingOverlayContainer from '../containers/LoadingOverlayContainer';

const { signin } = RoutePathConstants;

class App extends Component {
  componentDidMount() {
    const {
      location: { pathname }
    } = history;
    if (pathname === '/') {
      history.push(`/${signin}`);
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="app">
          <LoadingOverlayContainer />
          <Alert
            stack={false}
            position="top"
            effect="genie"
            timeout={5000}
            html={true}
            contentTemplate={CustomAlertContent}
          />
          <Switch>
            <Route exact path={`/${signin}`} component={SigninScreen} />
            <Route component={AuthedApp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  sendSampleAction: PropTypes.func
};

export default App;
