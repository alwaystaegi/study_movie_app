import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./App.css";

function App(props) {
  const [movies, setMovies] = useState([]);

  // //!async&&&await async===이것이 끝날때까지 기다리기,... await=== 기다려야할 요소
  async function getMovieAPI() {
    if (0 < movies.length) {
      return;
    }

    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b3982d81af5440cf98354d86429224d1&language=ko"
    );
    // setMovies(result.data.results);
    setMovies(result.data.results);
    // setMovies([1, 2, 3]);
  }

  useEffect(() => {
    getMovieAPI();
  }, []);

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
              adult={true}
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

export default App;
