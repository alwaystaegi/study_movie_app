import { useState } from "react";
function ClickCounter(props) {
  let [count, setCount] = useState(0);
  let [id, setID] = useState();
  let [flag, setFlag] = useState();
  function Timer() {
    if (!flag) {
      setFlag(true);
      setID(
        (id = setInterval(() => {
          setCount(function (a) {
            return a + 1;
          });
        }, 1000))
      );
    }
  }

  function Exit() {
    setFlag(false);
    clearInterval(id);
    setID(undefined);
  }

  function Reset() {
    setCount(0);
    if (flag) {
      clearInterval(id);
      setID(
        (id = setInterval(() => {
          setCount(function (a) {
            return a + 1;
          });
        }, 1000))
      );
    } else {
      setID(undefined);
    }
  }
  return (
    <>
      <div className="container">
        <h1>{props.title ? props.title : "시간 카운터"}</h1>
        <div>Count : {count}</div>
        <div>타이머의 ID : {id}</div>
        <button onClick={Timer}>시작</button>
        <button onClick={Exit}>종료</button>
        <button onClick={Reset}>초기화</button>
      </div>
    </>
  );
}

export default ClickCounter;
