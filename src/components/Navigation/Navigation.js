import React, { Component } from 'react';
import "./Navigation.css";
// import BANDAID from "./"; 


class Navigation extends Component {
    render() {
        return (
            <nav>
          <img className="logo" src={require("./BANDAID.png")} />
            </nav>
        );
    }
}
export default Navigation;