import React, { RefObject, useRef, useState } from "react";
import { MutableRefObject } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState<number | null>(null); //시작 시간
  const [now, setNow] = useState<number | null>(null); //현재 시간

  const startTimer = () => {
    //타이머 시작
    setStartTime(Date.now()); //현재 시간을 시작 시간으로 설정
    setNow(Date.now()); //현재 시간을 현재 시간으로 설정

    setInterval(() => {
      //1초마다 현재 시간을 갱신
      setNow(Date.now());
    }, 10);
  };

  let secondPassed = 0;
  if (startTime != null && now != null) {
    //타이머가 시작되었을 때
    secondPassed = (now - startTime) / 1000; //초단위로 변환
  }

  return (
    <div>
      <h1>
        시간 : <span>{secondPassed.toFixed(3)}</span>
      </h1>
      <button onClick={startTimer}>타이머 시작</button>
    </div>
  );
};

export default StopWatch;
