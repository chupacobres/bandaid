import React from 'react';
import './App.css';
import Details from './pages/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import NoMatch from './pages/'

function App() {
  return (
    <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bands" component={Home} />
        <Route exact path="/bands/:id" component={Details} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;