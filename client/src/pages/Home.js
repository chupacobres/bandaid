import React, { Component } from "react";
// import Navigation from '../components/Navigation/Navigation';
import Search from '../components/Search/Search';
// import Featured from '../components/Featured';
// import Footer from '../components/Footer';
// import API from '../utils/API';
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios';
import Bands from '../components/Bands/Bands'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      bands: [],
      genreSearch: ""
    };
    console.log("RESULTS and GENRE: ", this.state)
  }

  //load data from a remote endpoint:
  componentDidMount() {
    axios.get('http://localhost:3001/all').then(res => {
      console.log("axios get", res);
      this.setState({ bands: res.data });
    });
  };

  //passing search input to change state 
  handleGenre = (genre) => {
    console.log("passing : ", genre);
    this.setState({
      genreSearch: genre
    }, function () {
      console.log("genreSearch: ", this.state.genreSearch);
    });
  };


  render() {
    return (
      <div className="divApp" >
        <Search
          send={(prop) => {   //prop = this.textInput.current.value in Search.js
            // console.log(prop); //input
            this.handleGenre(prop)

          }}
        />
        <Bands bands={this.state.bands} genre={this.state.genreSearch} />
      </div>
    );
  }
}

export default Home;