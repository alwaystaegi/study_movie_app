import React, { useState } from "react";

function App() {
  let [text, setText] = useState("");
  function changed(ele) {
    setText(ele.target.value);
  }

  return (
    <>
      <div>hello App</div>
      <input
        onChange={changed}
        type={"text"}
        placeholder="아이디를 입력하세요"
        value={text}
      />
      {text ? <div>입력된 id:{text}</div> : null}
    </>
  );
}

export default App;
