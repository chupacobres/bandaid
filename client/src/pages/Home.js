import React, { Component } from "react";
import Navigation from '../components/Navigation';
import Results from '../pages/Results'
import API from '../utils/API';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



class Home extends Component {
  state = {
    results: []
  }
  render() {
    return (
      <div className="divApp" >
        <Navigation />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default Home;