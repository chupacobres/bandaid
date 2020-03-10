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

class Home extends Component {
  constructor(props) {
    super(props);
    // this.handleGenre = this.handleGenre.bind(this);
    this.state = {
      results: [],
      genreSearch: "",
    };
    console.log("RESULTS and GENRE: ", this.state)
  }

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
        </div>
      );
    }
  }

  export default Home;