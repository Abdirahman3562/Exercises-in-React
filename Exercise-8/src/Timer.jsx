import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState();
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let TimerId;
    if (isRunning && seconds > 0) {
      TimerId = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1; // Hoos u dhigid (Countdown)
        });
      }, 1000);
    }

    return () => clearInterval(TimerId);
  }, [isRunning, seconds]);
  

  return (
    <div>
      <h2>Countdown Timer</h2>
      <label>Set Time (seconds)</label>
     <input 
        type="number"
        onChange={(e) => setSeconds(Number(e.target.value))}
        // value={seconds}
      />
      <br />
      <h2>Time left: {seconds}</h2>
      <button disabled={isRunning || !seconds || seconds <= 0} onClick={() => setIsRunning(true)}>Start</button>
      <button disabled={!isRunning} onClick={() => setIsRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setSeconds(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;