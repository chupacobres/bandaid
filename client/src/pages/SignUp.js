import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
import FormSignUp from '../components/FormSignUp/FormSignUp';
import axios from "axios"
;
// import Footer from '../components/Footer';
// import API from '../utils/API';
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";


class SignUp extends Component {
  constructor(props) {
    super(props);
    // state={name: name}
  }


    //post data from a remote endpoint:
    // componentDidMount() {
    //   axios.post('http://localhost:3001/account').then(res => {
    //     console.log("axios get", res);
    //     this.setState({ bands: res.data });
    //   });
    // };


  render() {
    return (
      <div className="divApp">
        {/* <Navigation /> */}
        <FormSignUp />
      </div>
    );
  }
}

export default SignUp;