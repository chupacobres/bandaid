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
  }

  // searchBands = text => {
  //   console.log(text);
  // }

  // handleGenre = (genre) => {
  //   // console.log("PASSING", genre) //OK
  //   this.setState({ genreSearch: genre })
  //   // console.log("STATE", this.state) //results and genreSearch
  // }

  handleGenre = (x) => {
    console.log("PASSING argument", x) //OK x=prop=input
    // this.state.genreSearch= x; // WRONG DON'T DO THIS
    this.setState({genreSearch: x})
    this.setState ({ genreSearch: x }) // WHY IS THIS NOT WORKING ???
    console.log(this.setState); // CORRECT
    console.log("this.state.handlegenre", this.state.handleGenre) //undefined
    console.log("RESULTS and GENRE: ", this.state) //results and genreSearch
  }

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