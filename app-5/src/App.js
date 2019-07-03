import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          myImage={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbyPxdGfUe4e-G_4GvPgK7Lb_nCmZVuI0vXbh0OIKOpzeKL4uRw"
          }
        />
      </div>
    );
  }
}

export default App;
