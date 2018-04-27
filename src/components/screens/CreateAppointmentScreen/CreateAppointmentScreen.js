import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import _ from 'lodash';

import './style.css';
import BookingActions from '../../../actions/BookingActions';
import MachineImageNameConstants from '../../../constants/MachineImageNameConstants';

class CreateAppointmentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: moment(),
      selectedMachineId: null
    };
  }

  componentWillMount() {
    this.props.getAllMachines();
  }

  getMachineImage(machineId) {
    const { machines } = this.props;

    return !machines || !machineId || _.isEmpty(machines)
      ? null
      : machines
          .filter(machine => machine.id === machineId)
          .map(
            machine =>
              MachineImageNameConstants.filter(
                machineImage => machine.name === machineImage.name
              )[0]
          )[0].image;
  }

  handleDateChange = selectedDate => {
    this.setState({ selectedDate });
  };

  handleMachineChange = e => {
    const selectedMachineId = e.target.value;
    this.setState({ selectedMachineId });
  };

  render() {
    const { selectedDate, selectedMachineId } = this.state;
    const { machines } = this.props;
    const machineImage = this.getMachineImage(selectedMachineId);

    return (
      <div className="panel">
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
            {machineImage && <img src={machineImage} alt="DrMuller Machines" />}
          </div>
        </div>
        <div className="time-list-container" />
      </div>
    );
  }
}

CreateAppointmentScreen.propTypes = {
  getAllMachines: func.isRequired
};

export default connect(
  state => ({ machines: state.Booking.machines }),
  dispatch => bindActionCreators({ ...BookingActions }, dispatch)
)(CreateAppointmentScreen);
