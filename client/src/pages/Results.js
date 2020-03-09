import React, { Component } from "react";
import Navigation from '../components/Navigation/Navigation';
import Bands from '../components/Bands/Bands'
import Search from '..//components/Search/Search'
import API from '../utils/API';
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Results extends Component {
  state = {
    results: []
  }

  componentDidMount() {
    this.loadBands();
  }

  loadBands = () => {
    API.getBands()
      .then(res =>
        this.setState({ bands: res.data, name: ""})
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="divApp" >
        <Search 
        // searchBands={this.searchBands} 
        />

        <Bands 
        // results={this.state.bandsList} 
        />
      </div>
    );
  }
}

export default Results;