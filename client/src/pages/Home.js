import React, { Component } from "react";
import Search from '../components/Search/Search';

// import Featured from '../components/Featured';
// import Footer from '../components/Footer';

// import API from '../utils/API';
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";


class Home extends Component {
  state = {
    results: []
  }

  searchBands = text => {
console.log(text);
  }

  render() {
    return (
      <div className="divApp" >
        <Search searchBands={this.searchBands}/>
      </div>
    );
  }
}

export default Home;