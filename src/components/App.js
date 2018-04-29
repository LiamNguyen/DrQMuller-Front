import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Router, Route } from 'react-router-dom';
import Alert from 'react-s-alert';
import { TransitionGroup } from 'react-transition-group';

import history from '../history';
import SigninScreen from './screens/SigninScreen';
import CustomAlertContent from '../components/common/CustomAlertContent';
import AuthedApp from '../components/AuthedApp';
import { signin } from '../constants/RoutePathConstants';
import LoadingOverlayContainer from '../containers/LoadingOverlayContainer';

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
            html={true}
            contentTemplate={CustomAlertContent}
          />
          <TransitionGroup className="transition-group">
            <Switch>
              <Route exact path={`/${signin}`} component={SigninScreen} />
              <Route component={AuthedApp} />
            </Switch>
          </TransitionGroup>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  sendSampleAction: PropTypes.func
};

export default App;
