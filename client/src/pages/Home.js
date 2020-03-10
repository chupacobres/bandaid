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
          send={(prop) => {   //send = this.props = prop = this.textInput.current.value
            // console.log(prop); //input
            this.handleGenre(prop) //place input into function
          }}
        // searchResult={this.handleGenre}
        />

      </div>
    );
  }
}

export default Home;