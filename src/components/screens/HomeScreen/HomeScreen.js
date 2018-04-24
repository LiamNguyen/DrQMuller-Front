import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array } from 'prop-types';

import BookingActions from '../../../actions/BookingActions';

class HomeScreen extends Component {
  componentWillMount() {
    this.props.getAppointments();
  }

  render() {
    return <p>test</p>;
  }
}

HomeScreen.propTypes = {
  getAppointments: func.isRequired,
  appointments: array.isRequired
};

export default connect(
  state => ({ appointments: state.Booking.appointments }),
  dispatch => bindActionCreators({ ...BookingActions }, dispatch)
)(HomeScreen);
