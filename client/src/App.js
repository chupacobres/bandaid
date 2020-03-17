import React, { Component } from 'react';
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
import FormLogIn from './components/FormLogIn/FormLogIn';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  };

  //get document by id from result from login
  //put edit band 


  login = (emailTest, passwordTest) => {
    console.log("login passed")
    axios.post('http://localhost:3001/bands/login', { email: emailTest, password: passwordTest })
      .then(res => console.log("axios.post", res));
  }

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bands" component={Results} />

              {/* 
              https://stackoverflow.com/questions/45763908/rendering-redirect-component-based-on-ajax-request/45768790 
                */}

            < Route
              path='/account'
              render={(props) => <SignUp {...props} name={this.state.name} />}
            />


            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;