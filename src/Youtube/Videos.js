// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Movies(props) {
//   const [videos, setVideos] = useState([]);
//   // //!async&&&await async===이것이 끝날때까지 기다리기,... await=== 기다려야할 요소
//   async function getMovieAPI() {
//     const result = await axios.get(
//       `https://api.themoviedb.org/3/movie/{movie_id}?api_key=b3982d81af5440cf98354d86429224d1&language=ko&region=KR&&page=1`
//     );
//     if (result !== []) setVideos(result.data.results);
//   }

//   useEffect(() => {
//     getMovieAPI();
//   });

//   return (
//     <div key={props}>
//       <>
//         {videos.map(function (ele, idx) {
//           return (
//             <Movie
//               title={ele.title}
//               name={ele.production_companies[0].name}
//               vote_count={ele.vote_count}
//               release_date
//             />
//           );
//         })}
//       </>
//     </div>
//   );
// }

// export default Movies;
