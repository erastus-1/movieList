import React, { Component } from "react";
import Movie from "./components/Movie";
import Details from "./components/Details";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
             <Router>
                  <div className="App">
                     <Home />
                  <div className="content">
             <Switch>
                 <Route exact path="/">
                    <Movie />
                 </Route>
                 <Route path="/details">
                    <Details />
                </Route>
             </Switch>
                  </div>
                    </div>
             </Router>
  );
}
}

export default App;
