import PropTypes from "prop-types";

function Movie(props) {
  console.log(props);
  return (
    <>
      <div>영화제목 : {props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장르 : {props.genre}</div>
      <div>
        상영시간 :{" "}
        {props.time
          ? props.time
              .filter(function (ele) {
                return typeof ele === "string" ? true : false;
              })
              .join(", ")
          : "상영정보없음"}
      </div>
      <div>티켓가격 : {props.price ? props.price + 500 : "미발매"}</div>
    </>
  );
}

Movie.propTypes = {
  movieName: PropTypes.string.isRequired,
  price: PropTypes.number,
  actor: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  time: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default Movie;
