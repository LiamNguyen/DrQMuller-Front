import React from 'react';
import { func, string } from 'prop-types';

import './style.css';

const TimeListItem = ({ time, onTimeChosen, selectedTime }) => {
  function handleItemClick() {
    onTimeChosen(time);
  }

  return (
    <tr
      onClick={handleItemClick}
      className={selectedTime === time ? 'highlight' : ''}
    >
      <td>{time}</td>
    </tr>
  );
};

TimeListItem.defaultProps = {
  selectedTime: null
};

TimeListItem.propTypes = {
  time: string.isRequired,
  onTimeChosen: func.isRequired,
  selectedTime: string
};

export default TimeListItem;
