import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStartStopClick, buttonLabel, timeLeft, handleResetButtonClick }) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  return (
    <div>
      <h3 id="time-left">{formattedTimeLeft}</h3>
      <div className="controls-wrapper">
      <button id="start_stop" onClick={handleStartStopClick}>
        {buttonLabel}
      </button>
      <button id="reset" onClick={handleResetButtonClick}>
        Reset
      </button>
      </div>
    </div>
  );
};

export default TimeLeft;