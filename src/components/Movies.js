import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./Movie.css";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  // const [result, setResult] = useState([]);
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState("1");
  // //!async&&&await async===이것이 끝날때까지 기다리기,... await=== 기다려야할 요소
  async function getMovieAPI() {
    if (prev !== "" && props.apiPath === prev) {
      return;
    }

    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=b3982d81af5440cf98354d86429224d1&language=ko&region=KR&&page=${page}`
    );
    console.log(result);
    // switch (props.apiPath) {
    //   case "popular":
    //     setResult(
    //       await axios.get(
    //         `https://api.themoviedb.org/3/movie/popular?api_key=b3982d81af5440cf98354d86429224d1&language=ko&region=KR`
    //       )
    //     );
    //     break;
    //   case "upcoming":
    //     setResult(
    //       await axios.get(
    //         `https://api.themoviedb.org/3/movie/upcoming?api_key=b3982d81af5440cf98354d86429224d1&language=ko&region=KR`
    //       )
    //     );
    //     break;
    //   case "now_playing":
    //     setResult(
    //       await axios.get(
    //         `https://api.themoviedb.org/3/movie/now_playing?api_key=b3982d81af5440cf98354d86429224d1&language=ko&region=KR`
    //       )
    //     );
    //     break;
    // }
    // setMovies(result.data.results);
    if (result !== []) setMovies(result.data.results);
    setPrev(props.apiPath);
    // setMovies([1, 2, 3]);
  }

  useEffect(() => {
    getMovieAPI();
  }, [props.apiPath]);

  return (
    <div key={props}>
      <>
        {movies.map(function (ele, idx) {
          return (
            <Movie
              title={ele.title}
              poster={ele.backdrop_path}
              overview={ele.overview}
              vote={ele.vote_average}
              adult={ele.adult}
              lang={ele.original_language}
              date={ele.release_date}
              id={ele.id}
              key={idx}
            />
          );
        })}
      </>
    </div>
  );
}

export default Movies;
