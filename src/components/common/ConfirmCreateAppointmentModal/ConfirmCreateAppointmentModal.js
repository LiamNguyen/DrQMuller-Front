import React from 'react';
import { bool, func, string } from 'prop-types';
import Modal from 'react-modal';

import './style.css';
import IconButton from '../IconButton';
import ThumbsDownIcon from '../../../assets/images/thumbsDownIcon.png';
import ThumbsUpIcon from '../../../assets/images/thumbsUpIcon.png';
import Locale from './Locale';

Modal.setAppElement('#root');

const ConfirmCreateAppointmentModal = ({
  show,
  onHide,
  onConfirm,
  date,
  time,
  machineName,
  locale
}) => {
  const localization = Locale[locale];

  return (
    <Modal isOpen={show} onRequestClose={onHide}>
      <div className="confirm-create-appointment-modal">
        <p>{localization.text.title}</p>
        <p>
          {localization.text.date} <b>{date}</b>
        </p>
        <p>
          {localization.text.time} <b>{time}</b>
        </p>
        <p>
          {localization.text.machine} <b>{machineName}</b>
        </p>
        <p style={{ textAlign: 'center' }}>
          {localization.text.please_confirm}
        </p>
        <div className="icon-buttons-container">
          <IconButton
            onClick={onConfirm}
            iconSrc={ThumbsUpIcon}
            animationStyle={{ backgroundColor: '#4CAF50' }}
          />
          <IconButton onClick={onHide} iconSrc={ThumbsDownIcon} />
        </div>
      </div>
    </Modal>
  );
};

ConfirmCreateAppointmentModal.defaultProps = {
  time: null
};

ConfirmCreateAppointmentModal.propTypes = {
  show: bool.isRequired,
  onHide: func.isRequired,
  onConfirm: func.isRequired,
  date: string.isRequired,
  machineName: string.isRequired,
  locale: string.isRequired
};

export default ConfirmCreateAppointmentModal;
