import React, { Component } from 'react';
import './App.css';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './components/Home';
import Results from './components/Results';
import NoMatch from './components/NoMatch'
import Navigation from './components/Navigation/Navigation';
import FormLogIn from './components/FormLogIn/FormLogIn';
import FormSignUp from './components/FormSignUp/FormSignUp';
import Route1 from './components/Route1/Route1'
import axios from "axios";
const jwt = require('jsonwebtoken')

class App extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    // id: '',
    // isAuthenticated: false,
    loginStatus: false
  }

  // login = (emailTest, passwordTest) => {
  //   console.log("login passed")
  //   axios.post('http://localhost:3001/bands/login', 
  //   { email: emailTest, password: passwordTest })
  //     .then(res => { console.log("axios.post", res)});
  // this.setState= {
  //   isAuthenticated : true

  checkLoginStatus = () => {
    let token = localStorage.getItem('accessToken');
    if (token) {
      console.log('user logged in')
      this.setState({ loginStatus: true })
    } else {
      console.log('user not logged in')
      this.setState({ loginStatus: false })
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bands" component={Results} />
            <Route exact path="/login" component={FormLogIn} changeRoute={this.login} />

            <Route exact path='/account'
              render={(props) => <FormSignUp {...props} name={this.state.name} />}
            />

            <Route1 path="/account" loginStatus={this.state.loginStatus} component={FormSignUp} />

            <Route component={NoMatch} />

          </Switch>
        </div>
      </div>
    );
  }
}


export default App;