import React from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";
import Home from './pages/Home';
// import Account from './pages/Account';
import SignUp from './pages/SignUp';
import Results from './pages/Results';
import NoMatch from './pages/NoMatch'
import Navigation from './components/Navigation/Navigation'
function App() {
  return (
      <div>
        <Navigation />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bands" component={Results} />
        <Route exact path="/account" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    </div>
    
  );
}


export default App;