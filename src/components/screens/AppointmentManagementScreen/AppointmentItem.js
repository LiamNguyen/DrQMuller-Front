import React from 'react';
import { object, func, string } from 'prop-types';
import moment from 'moment';

import CustomButton from '../../common/CustomButton';

const AppointmentItem = ({
  locale,
  onConfirmClick,
  appointmentId,
  userId,
  date,
  time,
  machine
}) => {
  function handleConfirmClick() {
    onConfirmClick(appointmentId);
  }

  return (
    <tr>
      <td>{userId}</td>
      <td>{moment(date).format('DD-MM-YYYY')}</td>
      <td>{time}</td>
      <td>{machine}</td>
      <td className="button-cell">
        <CustomButton
          text={locale.button.confirm}
          onClick={handleConfirmClick}
        />
      </td>
    </tr>
  );
};

AppointmentItem.propTypes = {
  locale: object.isRequired,
  onConfirmClick: func.isRequired,
  appointmentId: string.isRequired,
  userId: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  machine: string.isRequired
};

export default AppointmentItem;
