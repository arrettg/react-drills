import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      nums: [12, 4, 56, 3]
    };
  }
  render() {
    let numsToDisplay = this.state.nums.map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });

    return <div className="App">{numsToDisplay}</div>;
  }
}

export default App;
