import React, { useEffect, useState } from "react";
import { useCounter } from "./hooks";

export default function SetTimer() {
  //시, 분, 초를 state로 저장한다.
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const { count, start, stop, reset, plusten, plusthirty } = useCounter(
    0,
    1000
  );

  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes % 60;
    const seconds = count % 60;
    setCurrentHours(hours);
    setCurrentSeconds(seconds);
    setCurrentMinutes(minutes);
  };

  // count의 변화에 따라 timer 함수 랜더링
  useEffect(timer, [count]);
  return (
    <>
      <h1>
        {currentHours < 10 ? `0${currentHours}` : currentHours}:
        {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:
        {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
      </h1>
      <button onClick={start}>시작</button>
      <button onClick={stop}>정지</button>
      <button onClick={reset}>리셋</button>
      <button onClick={plusten}>10초 증가</button>
      <button onClick={plusthirty}>30초 증가</button>
    </>
  );
}
