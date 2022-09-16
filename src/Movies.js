import React from "react";
import Movie from "./Movie";

const 영화목록 = [
  {
    id: 1,
    영화명: "탑건",
    주연배우: "황정민",
    장르: "느와르",
    상영시간: ["10:00", "12:00", "15:00", "15:00", ["1", "1"]],
    티켓가격: 15000,
  },
  {
    id: 2,
    영화명: "VforVendetta",
    주연배우: "하정우",
    장르: "정치",
    티켓가격: 5000,
  },
  {
    id: 3,
    영화명: "곡성",
    주연배우: "황정음",
    장르: "굿",
    // 티켓가격: 8000,
  },
];

function Movies() {
  const a = new Date();
  console.log(a);
  return (
    <>
      {/* <App /> */}
      <h1 id="one">영화앱</h1>
      {movies.map(function (movie) {
        return (
          <div key={movie.id}>
            <hr></hr>
            <Movie
              key={movie.id}
              movieName={movie.영화명}
              actor={movie.주연배우}
              genre={movie.장르}
              time={movie.상영시간}
              price={movie.티켓가격}
            />
          </div>
        );
      })}
      <hr />
      <Movie
        movieName="마더"
        actor="김혜자"
        genre="액션"
        time={["15:00", "15:00", "16:00", { time: "1" }]}
        price={5000}
      />
      {/* <hr></hr>
      <Movie
        movieName="탑건 매버릭"
        actor="톰크루즈"
        genre="비행시뮬레이션"
        time={["10:00", "12:00", "15:00"]}
      />
      <hr></hr>
      <hr></hr>
      <Movie
        movieName="브이포벤데타"
        actor="나탈리 포트만"
        genre="정치"
        // time={["10:50", "12:50"]}
      />
      <hr></hr>
      <Movie
        movieName="곡성"
        actor="황정민"
        genre="굿"
        time={["11:00", "12:00", "13:00"]}
      /> */}
    </>
  );
}

export default Movies;
