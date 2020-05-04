import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import BeePSound from "./sounds/BeepSound.mp3";

const SESSION = "SESSION"
const BREAK = "Break now!"

function App() {
  const audioElement = useRef(null);
  const [currentSessionType, setCurrentSessionType] = useState(SESSION); // 'Session' or 'Break'
  const [timerRunning, setTimerRunning] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(60 * 25);
  const [buttonLabel, setButtonLabel] = useState('Start');
  const decrementBreakLengthByOneMinute = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementSessionLengthByOneMinute = () => {
    if (!timerRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60)
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    if (!timerRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60)
    }
  };
  useEffect(() => {
    const handleSwitch = () => {
      if (currentSessionType === SESSION) {
        setCurrentSessionType(BREAK);
        setTimeLeft(breakLength * 60);
        audioElement.current.play();
      } else if (currentSessionType === BREAK) {
        // switch to session
        setCurrentSessionType(SESSION);
        // setTimeLeft to sessionLength
        setTimeLeft(sessionLength * 60);
      }
    }
    let countdown = null;
    if (timerRunning && timeLeft > 0) {
      countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timerRunning && timeLeft === 0) {
      countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      handleSwitch();
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  },
    [timerRunning, timeLeft, currentSessionType, breakLength, sessionLength]
  );

  const handleStart = () => {
    // AudioContext.resume();
    setTimerRunning(true);
    setButtonLabel('Stop');
  }
  const handlePause = () => {
    setTimerRunning(false);
    setButtonLabel('Start');
  }
  const handleResetButtonClick = () => {
    // reset audio
    audioElement.current.pause();
    audioElement.current.currentTime = 0
    // clear the timeout interval
    setTimerRunning(false);
    setButtonLabel('Start');
    setCurrentSessionType(SESSION);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(60 * 25);
  };

  return (
    <div className="container">
      <header>
        <h1>Pomodoro Clock</h1>
      </header>
      <main>
        <div className="time-wrapper">
          <h2 id="timer-label">{currentSessionType}</h2>
          <TimeLeft
            handleStartStopClick={timerRunning ? handlePause : handleStart}
            buttonLabel={buttonLabel}
            timeLeft={timeLeft}
            handleResetButtonClick={handleResetButtonClick}
          />
        </div>
        <div className="timeset-wrapper">
          <Session
            sessionLength={sessionLength}
            decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
            incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
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
