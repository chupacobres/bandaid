import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Bands from './pages/Bands';
import NoMatch from './pages/NoMatch'
import Navigation from './components/Navigation/Navigation'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bands" component={Bands} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NoMatch} />
          {/* <Route exact path="/login" component={Logout} /> */}
        </Switch>
      </div>
    </Router>
  );
}



export default App;