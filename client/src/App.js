import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home';
// import Account from './pages/Account';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
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
          <Route exact path="/bands" component={Results} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/login" component={Logout} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

  );
}



export default App;