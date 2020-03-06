import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch'
import Account from './pages/Account';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bands" component={Home} />
        <Route exact path="/bands/:id" component={Account} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;