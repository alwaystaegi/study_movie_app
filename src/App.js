import React from "react";

function Movie(props) {
  console.log(props);
  return (
    <>
      <div>영화제목:{props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장르 : {props.genre}</div>
      <div>상영시간 : {props.time ? props.time.join(" ") : "상영시간없음"}</div>
    </>
  );
}

const movies = [
  {
    id: 1,
    영화명: "탑건",
    주연배우: "황정민",
    장르: "느와르",
    상영시간: ["10:00", "12:00", "15:00"],
  },
  { id: 2, 영화명: "VforVendetta", 주연배우: "하정우", 장르: "정치" },
  { id: 3, 영화명: "곡성", 주연배우: "황정음", 장르: "굿" },
];

function App() {
  const a = <h1>a</h1>;
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
            />
          </div>
        );
      })}

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

export default App;
