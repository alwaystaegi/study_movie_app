import PropTypes from "prop-types";
import "./Movie.css";
function Movie(props) {
  const voteFn = () => {
    let temp = "";
    for (var i = 0; i < props.vote.toFixed(0); i++) {
      temp += "⭐";
    }
    return temp;
  };

  return (
    <div className="movie__data">
      <h3 className="movie__title">{props.title}</h3>
      <div className="movie__poster">
        {props.adult ? <div className="movie__adult">19</div> : <div />}

        <img
          src={`http://image.tmdb.org/t/p/original${props.poster}`}
          width={100}
          className="movie__poster__img"
          alt="test"
        ></img>
      </div>
      <div className="movie__overview ">{props.overview.slice(0, 100)}...</div>
      <div className="movie__vote ">
        {props.vote}
        {voteFn()}
      </div>
      <div className="movie__lang ">{props.lang.toUpperCase()}</div>
      <div className="movie__date">{props.date}</div>
      <div className="movie__id">영화ID :{props.id}</div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  adult: PropTypes.bool,
  lang: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Movie;
