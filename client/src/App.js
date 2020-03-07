import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
// import Account from './pages/Account';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bands" component={Results} />
        <Route exact path="/account" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;