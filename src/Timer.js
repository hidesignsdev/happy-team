import React, { useState, useEffect, useRef } from 'react';
import "./App.css";
import BeepSound from './sounds/BeepSound.mp3';
const SESSION = 'Keep Working';
const BREAK = 'Take a break!';

function Timer() {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timerRunning, setTimerRunning] = useState(false);
    const [timerLabel, setTimerLabel] = useState(SESSION);
    const [buttonLabel, setButtonLabel] = useState('Start');
    const [audio, setAudio] = useState(null);

    // const myAudio = useRef();
    // const context = new AudioContext();
    const incrementSession = () => {
        if (!timerRunning && sessionLength < 60) {
            setSessionLength(sessionLength + 1);
            setSecondsLeft((sessionLength + 1) * 60);
        }
    }
    const decrementSession = () => {
        if (!timerRunning && sessionLength > 1) {
            setSessionLength(sessionLength - 1);
            setSecondsLeft((sessionLength - 1) * 60);
        }
    }
    const incrementBreak = () => {
        if (!timerRunning && breakLength < 60) {
            setBreakLength(breakLength + 1);
        }
    }
    const decrementBreak = () => {
        if (!timerRunning && breakLength > 1) {
            setBreakLength(breakLength - 1);
        }

    }

    useEffect(() => {
        setAudio(document.getElementById('beep'))
    }, [])

    useEffect(() => {
        const handleSwitch = () => {
            if (timerLabel === SESSION) {
                setTimerLabel(BREAK);
                setSecondsLeft(breakLength * 60);
            } else if (timerLabel === BREAK) {
                setTimerLabel(SESSION);
                setSecondsLeft(sessionLength * 60);
            }
        }
        let countdown = null;
        if (timerRunning && secondsLeft > 0) {
            countdown = setInterval(() => {
                setSecondsLeft(secondsLeftstart - 1);
            }, 1000);
        } else if (timerRunning && secondsLeft === 0) {
            countdown = setInterval(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            handleSwitch();
        } else {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    },
        [timerRunning, secondsLeft, timerLabel, breakLength, sessionLength]
    );

    const handleStart = () => {
        // AudioContext.resume();
        audio.play()
        setTimerRunning(true);
        setButtonLabel('Pause');
    }
    const handlePause = () => {
        setTimerRunning(false);
        setButtonLabel('Continue');
    }
    const handleReset = () => {
        setSessionLength(25);
        setBreakLength(5);
        setSecondsLeft(25 * 60);
        setTimerLabel(SESSION);
        setTimerRunning(false);
        // myAudio.current.pause();
        audio.pause()
        // myAudio.current.currentTime = 0;
        audio.currentTime = 0
    }
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    return (
        <div className="containerTimer backgroundStyle">
            <h1>Pomodoro Timer</h1>
            <div className="pomodoro">
                <div id="timer-label" className="status">{timerLabel}</div>
                <div id="time-left" className="timerDisplay">
                    {minutes < 10 ? ("0" + minutes) : minutes}:{seconds < 10 ? ("0" + seconds) : seconds}
                </div>
                <button id="start_stop" className={timerRunning ? "pause-btn" : "start-btn"} onClick={timerRunning ? handlePause : handleStart}>{buttonLabel}</button>
            </div>
            <div className="settings">
                <div className="work">
                    <p id="session-label">Work Duration</p>
                    <button id="session-increment" className="btn-settings" onClick={incrementSession}>+</button>
                    <span id="session-length">{sessionLength}</span>mins
                    <button id="session-decrement" className="btn-settings" onClick={decrementSession}>-</button>
                </div>
                <div>
                    <button id="reset" className="reset-btn" onClick={handleReset}>Reset</button>
                </div>
                <div className="break">
                    <p id="break-label">Break Duration</p>
                    <button id="break-increment" className="btn-settings" onClick={incrementBreak}>+</button>
                    <span id="break-length">{breakLength}</span>mins
                    <button id="break-decrement" className="btn-settings" onClick={decrementBreak}>-</button>
                </div>
            </div>
            <audio id="beep" src={BeepSound} preload='auto'></audio>
        </div>
    );
}

export default Timer;