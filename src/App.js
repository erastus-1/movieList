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
                  <Route exact path="/" component={Movie} />
                  <Route path="/:movie_id" component={Details} />
               </Switch>
                  </div>
                    </div>
             </Router>
  );
}
}

export default App;
