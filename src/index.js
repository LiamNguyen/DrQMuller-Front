import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import SocketIOClient from 'socket.io-client';

import './assets/stylesheets/index.css';
import './assets/stylesheets/animation.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-datepicker/dist/react-datepicker.css';

import App from './components/App';
import createStore from './store';
import config from './config';
import LocalStorage from './lib/LocalStorage';
import SessionStorage from './lib/SessionStorage';
import socketIO from './socketIO';

config.init(window);
LocalStorage.init(window);
SessionStorage.init(window);
socketIO.init(SocketIOClient(config.apiHost));

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

const font = 'TitilliumWeb-Light';

const muiTheme = getMuiTheme({
  fontFamily: font,

  timePicker: {
    pickerHeaderColor: Colors.black,
    selectColor: Colors.black
  },
  datePicker: {
    pickerHeaderColor: Colors.black,
    selectColor: Colors.black
  }
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);
