import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array } from 'prop-types';

import './style.css';
import BookingActions from '../../../actions/BookingActions';
import FadeWrapper from '../../common/FadeWrapper';
import AppointmentCardView from '../../common/AppointmentCardView';
import FloatingButton from '../../common/FloatingButton';
import history from '../../../history';
import { createAppointment } from '../../../constants/RoutePathConstants';

class HomeScreen extends Component {
  componentWillMount() {
    this.props.getAppointments();
  }

  handleCreateAppointmentClick = () => {
    history.push(`/${createAppointment}`);
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
