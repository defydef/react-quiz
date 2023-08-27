import { useEffect } from "react";

function Timer({ onExecuteTimer, secondsRemaining }) {
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

  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
