// import moment from "moment";
import React from "react";

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  return (
    <div>
         <h2 id="session-label">Session</h2>
      <h3 id="session-length">{sessionLength}</h3>
      <button
        id="session-decrement"
        onClick={decrementSessionLengthByOneMinute}
      >
        -
      </button>
      <button
        id="session-increment"
        onClick={incrementSessionLengthByOneMinute}
      >
        +
      </button>
    </div>
  );
};

export default Session;
