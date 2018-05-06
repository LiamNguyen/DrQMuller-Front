import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import ReactTransitions from 'react-transitions';

import './style.css';
import BookingActions from '../../../actions/BookingActions';
import SmallLoading from '../../common/SmallLoading';
import Locale from './Locale';
import TimeListItem from './TimeListItem';
import CustomButton from '../../common/CustomButton';
import ConfirmCreateAppointmentModal from '../../common/ConfirmCreateAppointmentModal';
import CreateAppointmentPresenter from '../../../presenters/CreateAppointmentPresenter';
import FadeWrapper from '../../common/FadeWrapper';
import BackButton from '../../common/BackButton';
import history from '../../../history';
import { authed, home } from '../../../constants/RoutePathConstants';

class CreateAppointmentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: Locale[props.Localization.locale],
      selectedDate: moment(),
      selectedMachineId: null,
      selectedTime: null,
      confirmModalShow: false
    };
  }

  componentWillMount() {
    this.props.getAllMachines();
  }

  handleDateChange = selectedDate => {
    const { selectedMachineId } = this.state;
    this.setState({ selectedDate });

    if (!selectedMachineId) return;

    this.props.getAvailableTime({
      date: moment(selectedDate).format('YYYY-MM-DD'),
      machineId: selectedMachineId
    });
  };

  handleMachineChange = e => {
    const selectedMachineId = e.target.value;
    const { selectedDate } = this.state;
    this.setState({ selectedMachineId });

    this.props.getAvailableTime({
      date: moment(selectedDate).format('YYYY-MM-DD'),
      machineId: selectedMachineId
    });
  };

  handleChosenTime = selectedTime => {
    this.setState({ selectedTime });
  };

  handleCreateAppointmentClick = () => {
    this.setState({ confirmModalShow: true });
  };

  handleConfirmModalHide = () => {
    this.setState({ confirmModalShow: false });
  };

  handleConfirm = () => {
    const {
      selectedMachineId: machineId,
      selectedDate: date,
      selectedTime: time
    } = this.state;

    this.handleConfirmModalHide();
    this.props.createAppointment({
      machineId,
      schedule: { date: moment(date).format('YYYY-MM-DD'), time }
    });
  };

  handleGoBack = () => {
    history.push(`/${authed}/${home}`);
  };

  render() {
    const {
      selectedDate,
      selectedMachineId,
      locale,
      selectedTime,
      confirmModalShow
    } = this.state;
    const {
      machines,
      appointments,
      availableTime,
      Booking: { loadingAvailableTime },
      Localization: { locale: language }
    } = this.props;
    const machineImage = CreateAppointmentPresenter.getMachineImage(
      selectedMachineId,
      machines
    );
    const selectedMachineName = CreateAppointmentPresenter.getMachineName(
      selectedMachineId,
      machines
    );

    return (
      <div className="panel">
        {appointments.length > 0 && (
          <div className="back-button-container">
            <BackButton onClick={this.handleGoBack} size={40} fill="#b777ae" />
          </div>
        )}
        <div className="date-picker-container">
          <DatePicker
            inline
            selected={selectedDate}
            onChange={this.handleDateChange}
            minDate={moment()}
            showDisabledMonthNavigation
          />
          <select
            className="form-control machine-select"
            onChange={this.handleMachineChange}
            defaultValue="default"
          >
            <option value="default" disabled>
              Choose machine
            </option>
            {machines &&
              machines.map(machine => (
                <option key={machine.id} value={machine.id}>
                  {machine.name}
                </option>
              ))}
          </select>
          <div className="machine-image-container">
            {machineImage && (
              <ReactTransitions transition="sides" width="100%" height="360px">
                <img
                  key={machineImage}
                  src={machineImage}
                  alt="DrMuller Machines"
                />
              </ReactTransitions>
            )}
          </div>
        </div>
        <div className="time-list-container">
          <div className="time-list">
            {loadingAvailableTime ? (
              <SmallLoading text={locale.text.retrieving_time} />
            ) : !availableTime || availableTime.length < 1 ? (
              // TODO: Show different message when available time is empty or null
              <p className="message">
                {locale.text.available_time_not_fetched}
              </p>
            ) : (
              <Table responsive>
                <tbody>
                  {availableTime.map(time => (
                    <TimeListItem
                      key={time}
                      time={time}
                      selectedTime={selectedTime}
                      onTimeChosen={this.handleChosenTime}
                    />
                  ))}
                </tbody>
              </Table>
            )}
          </div>
          {selectedTime && (
            <CustomButton
              onClick={this.handleCreateAppointmentClick}
              text={locale.button.create_appointment}
            />
          )}
        </div>
        <ConfirmCreateAppointmentModal
          show={confirmModalShow}
          onHide={this.handleConfirmModalHide}
          onConfirm={this.handleConfirm}
          date={moment(selectedDate).format('DD.MM.YYYY')}
          time={selectedTime}
          machineName={selectedMachineName}
          locale={language}
        />
      </div>
    );
  }
}

CreateAppointmentScreen.defaultProps = {
  machines: [],
  availableTime: []
};

CreateAppointmentScreen.propTypes = {
  getAllMachines: func.isRequired,
  getAvailableTime: func.isRequired,
  machines: array,
  availableTime: array
};

export default connect(
  state => ({
    machines: state.Booking.machines,
    availableTime: state.Booking.availableTime,
    appointments: state.Booking.appointments,
    ..._.pick(state, ['Localization', 'Booking'])
  }),
  dispatch => bindActionCreators({ ...BookingActions }, dispatch)
)(FadeWrapper(CreateAppointmentScreen));
