import PropTypes from "prop-types";

function Movie(props) {
  console.log(props);
  return (
    <>
      <div>영화제목:{props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장르 : {props.genre}</div>
      <div>상영시간 : {props.time ? props.time.join(" ") : "상영시간없음"}</div>
      <div>티켓가격 : {props.price + 500}</div>
    </>
  );
}

Movie.propTypes = {
  movieName: PropTypes.string,
  price: PropTypes.number,
  actor: PropTypes.string,
  genre: PropTypes.string,
};
export default Movie;
