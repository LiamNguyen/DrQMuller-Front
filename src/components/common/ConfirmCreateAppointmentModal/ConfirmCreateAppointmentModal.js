import React from 'react';
import { bool, func, string } from 'prop-types';
import Modal from 'react-modal';

import './style.css';
import IconButton from '../IconButton';
import ThumbsDownIcon from '../../../assets/images/thumbsDownIcon.png';
import ThumbsUpIcon from '../../../assets/images/thumbsUpIcon.png';

Modal.setAppElement('#root');

const ConfirmCreateAppointmentModal = ({
  show,
  onHide,
  onConfirm,
  date,
  time,
  machineName
}) => (
  <Modal isOpen={show} onRequestClose={onHide}>
    <div className="confirm-create-appointment-modal">
      <p>You are about to create an appointment with details as below:</p>
      <p>
        Date: <b>{date}</b>
      </p>
      <p>
        Time: <b>{time}</b>
      </p>
      <p>
        Machine: <b>{machineName}</b>
      </p>
      <p style={{ textAlign: 'center' }}>
        Please confirm if the details are correct
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

ConfirmCreateAppointmentModal.defaultProps = {
  time: null
};

ConfirmCreateAppointmentModal.propTypes = {
  show: bool.isRequired,
  onHide: func.isRequired,
  onConfirm: func.isRequired,
  date: string.isRequired,
  machineName: string.isRequired
};

export default ConfirmCreateAppointmentModal;
