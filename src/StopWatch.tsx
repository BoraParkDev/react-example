import React, { RefObject, useRef, useState } from "react";
import { MutableRefObject } from "react";

const StopWatch = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);

  const startTimer = () => {
    setInterval(() => {
      setCurrentTime((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>
        시간 : <span>{currentTime}</span>
      </h1>
      <button onClick={startTimer}>타이머 시작</button>
    </div>
  );
};

export default StopWatch;
