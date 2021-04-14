import React, { Component } from "react";
import Movie from "./components/Movie";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (

    <div className="App">
    <Home />
    <Movie />
    </div>
  );
}
}

export default App;
