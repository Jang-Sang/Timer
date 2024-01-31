import { useCallback, useRef, useState } from "react";

export const useCounter = (initialValue, ms) => {
  //useState의 초기값으로 initialValue 사용
  const [count, setCount] = useState(initialValue);
  // 밑에서 setInterval을 통해 생성된 타이머 ID를 저장하는데 사용, 초기값은 null
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    // 현재 시간이 진행중이면 아무것도 하지 않는다.
    if (intervalRef.current !== null) {
      return;
    }
    // 새로운 인터벌로 설정한다. 이 인터벌은 ms마다 count를 1씩 증가시킨다.
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, ms);
  }, []);
  // callback을 통해서 stop함수를 메모이제이션한다.
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  // 카운트를 0으로 만들고 정지시킨다.
  const reset = useCallback(() => {
    setCount(0);
    stop();
  }, []);
  // 기존의 setCount에서 10을 더한다.
  const plusten = useCallback(() => {
    setCount((prev) => prev + 10);
  }, []);
  // 기존의 setCount에서 30을 더한다.
  const plusthirty = useCallback(() => {
    setCount((prev) => prev + 30);
  }, []);

  return { count, start, stop, reset, plusten, plusthirty };
};
