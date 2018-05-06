import React, { Component } from 'react';
import _ from 'lodash';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Table } from 'react-bootstrap';

import './style.css';
import ManagementActions from '../../../actions/ManagementActions';
import Locale from './Locale';
import AppointmentItem from './AppointmentItem';
import socketIO from '../../../socketIO';
import { refreshAppointments } from '../../../constants/SocketIOListenerConstants';

class AppointmentManagementScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: Locale[props.Localization.locale]
    };

    this.socket = socketIO.socket;
  }

  componentWillMount() {
    this.props.getManagementAppointments();
    this.socket.on(refreshAppointments, () => {
      this.props.getManagementAppointments();
    });
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  handleConfirmClick = appointmentId => {
    this.props.confirmAppointment(appointmentId);
  };

  render() {
    const {
      Management: { appointments }
    } = this.props;
    const {
      locale,
      locale: {
        tableHeaders: { userId, date, time, machine }
      }
    } = this.state;

    return (
      <Row>
        <Col
          md={10}
          className="column custom-center management-appointments-column"
        >
          <Table responsive className="appointment-table">
            <thead>
              <tr>
                <th>{userId}</th>
                <th>{date}</th>
                <th>{time}</th>
                <th>{machine}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map(appointment => {
                  const {
                    id,
                    userId,
                    machineName,
                    schedule: { date, time }
                  } = appointment;
                  return (
                    <AppointmentItem
                      key={id}
                      locale={locale}
                      onConfirmClick={this.handleConfirmClick}
                      appointmentId={id}
                      userId={userId}
                      date={date}
                      time={time}
                      machine={machineName}
                    />
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="no-data">
                    {locale.text.no_data}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

AppointmentManagementScreen.propTypes = {
  Management: object.isRequired,
  getManagementAppointments: func.isRequired,
  confirmAppointment: func.isRequired
};

export default connect(
  state => _.pick(state, ['Management', 'Localization']),
  dispatch => bindActionCreators({ ...ManagementActions }, dispatch)
)(AppointmentManagementScreen);
