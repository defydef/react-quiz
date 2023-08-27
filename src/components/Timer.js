import { useEffect } from "react";

function Timer({ onExecuteTimer, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        // run function inside setInterval every 1000ms
        onExecuteTimer({ type: "executeTimer" });
      }, 1000);
      return () => clearInterval(id); // cleanup function: stop timer when Timer component unmounts
    },
    [onExecuteTimer, secondsRemaining]
  );

  return (
    <div className="timer">
      {mins < 10 && 0}
      {mins}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
}

export default Timer;
