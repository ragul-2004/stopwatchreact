import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <h2 style={{color: "black",}}>Ragul A C</h2>
      <h2 style={{color: "black",}}>212221240042</h2>
      <h1 style={{color: "black",}}>Stopwatch</h1>
      <div className="card">
        <h2>Timer</h2>
        <div style={{color: "white"}} className="time">{formatTime(time)}</div>
        <div className="buttons">
          <button className="start" onClick={startTimer} disabled={isRunning}>Start</button>
          <button className="stop" onClick={stopTimer} disabled={!isRunning}>Stop</button>
          <button className="reset" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;