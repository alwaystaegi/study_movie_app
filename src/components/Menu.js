import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
function Menu() {
  const [darkmode, setDark] = useState(false);
  function toggle() {
    setDark(!darkmode);
    if (!darkmode) {
      console.log("on");
      document.querySelector("body").classList.add("dark");
    } else document.querySelector("body").classList.remove("dark");
  }
  return (
    <nav className="overflow-y-hidden ">
      <ul>
        <li className="">
          <Link to="/">νμΌλ‘</Link>
        </li>
        <li className="">
          <Link to="/popular">ππ΄μΈκΈ°μν</Link>
        </li>

        <li className="">
          <Link to="/now_playing">π₯μμμ€ μν</Link>
        </li>

        <li className="">
          <Link to="/upcoming">πκ°λ΄μμ  μν</Link>
        </li>
        <li className="">
          <Link to="/about">πabout us</Link>
        </li>
        <li className="">
          <Link to="/youtube">Youtube</Link>
        </li>
        <li className="">
          <Link to="/ClickCounter">counter</Link>
        </li>
        <li className="">
          <Link to="/tailwind">tailwind</Link>
        </li>
        <li className="">
          <Link to="/kakao">kakao</Link>
        </li>
        <li>
          <div className="text-white">
            <input
              id="toggle_dark"
              type="checkbox"
              checked={darkmode}
              onChange={toggle}
            ></input>
            <label htmlFor="toggle_dark">λ€ν¬λͺ¨λ</label>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
