// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function App(props) {
//   // const [loading, setloading] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const [test, setTest] = useState(-1);
//   // setTimeout(function () {
//   //   setloading(false);
//   // }, 1000);

//   // //!async&&&await async===이것이 끝날때까지 기다리기,... await=== 기다려야할 요소
//   async function getMovieAPI() {
//     if (0 < movies.length) {
//       return;
//     }

//     const result = await axios.get(
//       "https://api.themoviedb.org/3/movie/popular?api_key=b3982d81af5440cf98354d86429224d1&language=ko"
//     );
//     // setMovies(result.data.results);
//     setMovies(result.data.results);
//     console.log(result.data.results);
//     // setMovies([1, 2, 3]);
//     console.log(movies);
//     setTest(100);
//     console.log(test);
//   }

//   useEffect(() => {
//     getMovieAPI();
//   }, []);

//   return (
//     <>
//       {0 !== movies.length ? (
//         <div>
//           <div>영화제목{movies[0]}</div>
//           <div>개요{movies[0].overview}</div>
//           <div>평점{movies[0].vote_average}</div>
//           <div>성인영화{movies[0].adult}</div>
//           <div>영화언어:{movies[0].original_language}</div>
//           <div>개봉일: {movies[0].release_date}</div>
//         </div>
//       ) : (
//         <div></div>
//       )}
//       )}
//     </>
//   );
// }

// export default App;
