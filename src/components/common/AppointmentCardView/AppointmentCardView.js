import React from 'react';
import { string, bool } from 'prop-types';

import './style.css';
import MachineImageNameConstants from '../../../constants/MachineImageNameConstants';
import Locale from './Locale';

const AppointmentCardView = ({
  date,
  time,
  machineName,
  isConfirmed,
  locale
}) => {
  const localization = Locale[locale];

  return (
    <div className="card-view">
      <div className="detail">
        <p>
          {localization.text.date} <b>{date}</b>
        </p>
        <p>
          {localization.text.time} <b>{time}</b>
        </p>
        <p>
          {localization.text.machine} <b>{machineName}</b>
        </p>
        <p className={isConfirmed ? 'confirmed' : 'waiting'}>
          {isConfirmed
            ? localization.text.confirmed
            : localization.text.waiting}
        </p>
      </div>
      <div className="machine-image-container">
        <img
          src={
            MachineImageNameConstants.find(
              machine => machine.name === machineName
            ).image
          }
          alt="DrMuller machines"
        />
      </div>
    </div>
  );
};

AppointmentCardView.propTypes = {
  date: string.isRequired,
  time: string.isRequired,
  machineName: string.isRequired,
  isConfirmed: bool.isRequired,
  locale: string.isRequired
};

export default AppointmentCardView;
