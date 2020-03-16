import React, { Component } from "react";
// import LoginControl from "../LoginControl/LoginControl";
import './LoginButton.css';

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

export default LoginButton;