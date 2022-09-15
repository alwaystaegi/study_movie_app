import React from "react";
import Food from "./Food";

const favArr = ["김치", "파전", "볶음"];
function App() {
  return (
    <React.StrictMode>
      {/* <App /> */}
      <h1 id="one">좋아하는 음식 목록</h1>
      <Food fav={favArr} />;
    </React.StrictMode>
  );
}

export default App;
