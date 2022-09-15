import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import Sunmoon from "./Sunmoon";

const 학생정보 = [
  {
    name: "장효택",
    학번: 2018243058,
  },
  {
    name: "장효택1",
    학번: 20182430581,
  },
  {
    name: "장효택2",
    학번: 20182430582,
    주제: "신구",
  },
  {
    name: "장효택3",
    학번: 20182430583,
  },
  {
    name: "장효택4",
    학번: 20182430584,
  },
  {
    name: "장효택5",
    학번: 20182430585,
  },
];
function App() {
  return (
    <React.Fragment>
      <h1>선문대학교</h1>
      {학생정보.map((ele, idx, arr) => {
        console.log(`idx : ${idx}, 이름 : ${ele.name}, 학번 ${ele.학번}`);
        return <Sunmoon name={ele.name} 학번={ele.학번} ㄴㄴ={ele.주제} />;
      })}
    </React.Fragment>
  );
}

export default App;
