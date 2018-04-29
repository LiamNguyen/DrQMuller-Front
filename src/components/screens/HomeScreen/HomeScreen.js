import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array } from 'prop-types';

import BookingActions from '../../../actions/BookingActions';
import FadeWrapper from '../../common/FadeWrapper';

class HomeScreen extends Component {
  componentWillMount() {
    this.props.getAppointments();
  }

  render() {
    return <p>Home screen</p>;
  }
}

HomeScreen.propTypes = {
  getAppointments: func.isRequired,
  appointments: array.isRequired
};

export default connect(
  state => ({ appointments: state.Booking.appointments }),
  dispatch => bindActionCreators({ ...BookingActions }, dispatch)
)(FadeWrapper(HomeScreen));
