import React, { Component } from 'react';
import "./Navigation.css";
// import BANDAID from "./"; 


class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="divLogo">
          <img  src={require("./BANDAID.png")} />
          </div>
          <div className="leftNav">
          <a href="#">Login | </a>
          <a href="#">Sign Up</a>
          </div>
            </nav>
        );
    }
}
export default Navigation;