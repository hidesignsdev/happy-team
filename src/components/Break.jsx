// import moment from "moment";
import React from "react";

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}) => {
  // const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();
  return (
    <div>
      <h2 id="break-label">Break</h2>
      <h3 id="break-length">{breakLength}</h3>
      <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
        -
      </button>
      <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>
        +
      </button>
    </div>
  );
};

export default Break;
