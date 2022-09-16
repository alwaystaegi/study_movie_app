import React from "react";
// import Movies from "./components/Movies";
//state.../...//..././../.../..../...../../../././.../...../..../...../..../
// function App() {
//   return <div>hello world</div>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  증가함수 = () => {
    this.setState(function (현재스테이트) {
      return { count: 현재스테이트.count + 1 };
    });
    //this.setState({ count: this.state.count + 1 });
  };
  감소함수 = () => {
    this.setState(function (현재스테이트) {
      return { count: 현재스테이트.count - 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>카운터: {this.state.count}</h1>
        <button onClick={this.증가함수}>+1</button>
        <button onClick={this.감소함수}>-1</button>
      </div>
    );
  }
}

export default App;
