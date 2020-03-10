import React, { Component } from "react";
import Search from '../components/Search/Search';

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