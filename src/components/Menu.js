import { Link } from "react-router-dom";
import "./Menu.css";
function Menu() {
  return (
    <nav>
      <ul>
        <li className="">
          <Link to="/">홈으로</Link>
        </li>
        <li className="">
          <Link to="/popular">🌋🏴인기영화</Link>
        </li>

        <li className="">
          <Link to="/now_playing">🎥상영중 영화</Link>
        </li>

        <li className="">
          <Link to="/upcoming">🔓개봉예정 영화</Link>
        </li>
        <li className="">
          <Link to="/about">🙋about us</Link>
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
      </ul>
    </nav>
  );
}

export default Menu;
