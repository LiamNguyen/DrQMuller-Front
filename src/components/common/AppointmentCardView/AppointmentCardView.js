import React from 'react';
import { string, bool, func } from 'prop-types';

import './style.css';
import MachineImageNameConstants from '../../../constants/MachineImageNameConstants';
import Locale from './Locale';
import CustomButton from '../CustomButton';
import HomeScreenPresenter from '../../../presenters/HomeScreenPresenter';

const AppointmentCardView = ({
  id,
  date,
  time,
  machineName,
  isConfirmed,
  locale,
  isCancelled,
  onCancelClick
}) => {
  const localization = Locale[locale];
  const isAppointmentValid = HomeScreenPresenter.isAppointmentValid(
    date,
    time,
    isCancelled
  );
  const isExpired = HomeScreenPresenter.isExpired(date, time);

  function handleCancelClick() {
    onCancelClick(id);
  }

  return (
    <div className={`card-view ${isAppointmentValid ? '' : 'invalid'}`}>
      {!isAppointmentValid && <div className="card-view-overlay" />}
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
        <p
          className={
            isCancelled || isExpired
              ? 'cancelled-expired'
              : isConfirmed
                ? 'confirmed'
                : 'waiting'
          }
        >
          {isCancelled
            ? localization.text.cancelled
            : isExpired
              ? localization.text.expired
              : isConfirmed
                ? localization.text.confirmed
                : localization.text.waiting}
        </p>
        {isAppointmentValid && (
          <CustomButton
            text={localization.button.cancel}
            onClick={handleCancelClick}
          />
        )}
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

AppointmentCardView.defaultProps = {
  isCancelled: false
};

AppointmentCardView.propTypes = {
  id: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  machineName: string.isRequired,
  isConfirmed: bool.isRequired,
  locale: string.isRequired,
  isCancelled: bool,
  onCancelClick: func.isRequired
};

export default AppointmentCardView;
