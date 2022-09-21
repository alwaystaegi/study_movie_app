//! react-router-dom 사용===> Link tag...> a tag와 비슷함 but 새로 필요한 요소만 가져옴 ex)만약 모든 페이지에 둘리가 기본으로 있다? 둘리는 새로 가져오지 않고 그대로 사용

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import Menu from "./components/Menu";
import Youtube from "./Youtube/Youtube_main";
function Home() {
  return <h2>홈 컴포넌트1</h2>;
}
function About() {
  return <h2>개발자 소개</h2>;
}
function App(props) {
  return (
    <HashRouter>
      <div>
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Movies apiPath="popular" />} />
        <Route path="/upcoming" element={<Movies apiPath="upcoming" />} />
        <Route path="/now_playing" element={<Movies apiPath="now_playing" />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
