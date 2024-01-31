import "./App.css";
import { useRef, useState } from "react";
import SetTimer from "./components/timer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  let alertRef = useRef("");

  const onHandleOpenBtn = () => {
    alertRef.current = "Okay, Bye...";
    if (!isOpen) {
      alertRef.current = "Tada!";
    }
    setIsOpen((prev) => !prev);
    alert(alertRef.current);
  };

  return (
    <>
      <button onClick={onHandleOpenBtn}>
        {isOpen ? "버튼 숨기기" : "버튼 보이기"}
      </button>
      <div>{isOpen && <SetTimer />}</div>
    </>
  );
}

export default App;

/**
요구사항 타이머 만들기
1. 타이머 보이기 버튼을 누르면 타이머가 '마운트'되며 alert로 Tada!가 나타나야해요.
2. 숨기기 버튼을 누르면 타이머가 '언마운트'되며 alert로 Okay, Bye...가 나타나야해요.
3. 타이머에는 시작, 중지, 초기화, 10초 증가가 있어요!

- 시작: 타이머가 시작됩니다. 중지 상태에서 시작버튼을 누르면 타이머가 재시작 됩니다.
- 중지: 타이머가 중지됩니다 (시간 고정)
- 초기화: 타이머가 0으로 초기화 됩니다. 타이머가 실행 중이었다면 타이머가 중지됩니다.
- 10초 증가: 타이머 실행, 중지 여부와 상관없이 10초가 증가합니다.

4. 카운트가 UI에서 증가할 때마다 "증가되었습니다, {count}"가 출력 되어야해요.
5. useRef를 사용하지 않아도 구현이 가능합니다. 그러나 ref, effect, state를 모두 사용해야해요.

 */
