import React from 'react';
import './App.css';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home';
// import Account from './pages/Account';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import NoMatch from './pages/NoMatch'
import Navigation from './components/Navigation/Navigation';
// import FormLogIn from './components/FormLogIn/FormLogIn';
import Login from './pages/Login'


function App() {
  return (
      <div>
        <Navigation />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bands" component={Results} />
        <Route exact path="/account" component={SignUp} />
        <Route exact path="/login" component={Login} />
      
        <Route component={NoMatch} />
      </Switch>
    </div>
    </div>
    
  );
}


export default App;