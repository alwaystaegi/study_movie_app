import { Link } from "react-router-dom";
import "./Menu.css";
function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/popular">🌋🏴인기영화</Link>
        </li>

        <li>
          <Link to="/now_playing">🎥상영중 영화</Link>
        </li>

        <li>
          <Link to="/upcoming">🔓개봉예정 영화</Link>
        </li>
        <li>
          <Link to="/about">🙋about us</Link>
        </li>
        <li>
          <Link to="/youtube">Youtube</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
