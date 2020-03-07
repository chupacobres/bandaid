import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
import FormSignUp from '../components/FormSignUp/FormSignUp'

// import Footer from '../components/Footer';
// import API from '../utils/API';
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";


class SignUp extends Component {
  

  render() {
    return (
      <div className="divApp">
        <Navigation />
        <FormSignUp/>
      </div>
    );
  }
}

export default SignUp;