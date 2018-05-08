import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array } from 'prop-types';
import SocketIOClient from 'socket.io-client';

import './style.css';
import BookingActions from '../../../actions/BookingActions';
import FadeWrapper from '../../common/FadeWrapper';
import AppointmentCardView from '../../common/AppointmentCardView';
import FloatingButton from '../../common/FloatingButton';
import history from '../../../history';
import {
  authed,
  createAppointment
} from '../../../constants/RoutePathConstants';
import { refreshUserAppointments } from '../../../constants/SocketIOListenerConstants';
import config from '../../../config';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.socket = SocketIOClient(config.apiHost);
  }

  componentWillMount() {
    const { getAppointments, appointments } = this.props;
    getAppointments();
    this.socket.on(refreshUserAppointments, appointmentId => {
      const appointment = appointments.find(
        appointment => appointment.id === appointmentId
      );
      if (!appointment) return;

      getAppointments(false);
    });
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  handleCreateAppointmentClick = () => {
    history.push(`/${authed}/${createAppointment}`);
  };

  handleCancelAppointment = id => {
    this.props.cancelAppointment({ appointmentId: id });
  };

  render() {
    const { appointments, locale } = this.props;

    return (
      <div className="home">
        {appointments.map(appointment => {
          const {
            id,
            schedule: { date, time },
            machineName,
            isConfirmed,
            isCancelled
          } = appointment;

          return (
            <AppointmentCardView
              key={id}
              id={id}
              date={date}
              time={time}
              machineName={machineName}
              isConfirmed={isConfirmed}
              isCancelled={isCancelled}
              locale={locale}
              onCancelClick={this.handleCancelAppointment}
            />
          );
        })}
        <FloatingButton onClick={this.handleCreateAppointmentClick} />
      </div>
    );
  }
}

HomeScreen.propTypes = {
  getAppointments: func.isRequired,
  cancelAppointment: func.isRequired,
  appointments: array.isRequired
};

export default connect(
  state => ({
    appointments: state.Booking.appointments,
    locale: state.Localization.locale
  }),
  dispatch => bindActionCreators({ ...BookingActions }, dispatch)
)(FadeWrapper(HomeScreen));
