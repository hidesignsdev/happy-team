import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import BeePSound from "./sounds/BeepSound.mp3";

function App() {
  const audioElement = useRef(null);
  const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
  };

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60);
  };

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }

          audioElement.current.play();

          if (currentSessionType === "Session") {
            // switch to break
            setCurrentSessionType("Break");
            // setTimeLeft to breakLength
            setTimeLeft(breakLength);
          } else if (currentSessionType === "Break") {
            // switch to session
            setCurrentSessionType("Session");
            // setTimeLeft to sessionLength
            setTimeLeft(sessionLength);
          }
        });
      }, 100); // TODO: turn back into 1000
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    // reset audio
    audioElement.current.load();
    // clear the timeout interval
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLength(60 * 25);
    setBreakLength(60 * 5);
    setTimeLeft(60 * 25);
  };

  return (
    <div className="container">
      <header>
        <h1>Pomodoro Clock</h1>
      </header>

      <main>
        <div className="time-wrapper">
          <h2 id="session-label">Session</h2>
          <TimeLeft
            handleStartStopClick={handleStartStopClick}
            timerLabel={currentSessionType}
            startStopButtonLabel={isStarted ? "Stop" : "Start"}
            start
            timeLeft={timeLeft}
            handleResetButtonClick={handleResetButtonClick}
          />
        </div>
        <div className="timeset-wrapper">
          <Session
            sessionLength={sessionLength}
            decrementSessionLengthByOneMinute={
              decrementSessionLengthByOneMinute
            }
            incrementSessionLengthByOneMinute={
              incrementSessionLengthByOneMinute
            }
          />
          <Break
            breakLength={breakLength}
            decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
            incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
          />
        </div>
      </main>

      <audio id="beep" ref={audioElement}>
        <source src={BeePSound} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
