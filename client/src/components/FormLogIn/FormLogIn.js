import React from 'react';
import "./FormLogIn.css";
import bandaid from "../../assets/bandaid.png";

function FormLogIn(props) {

  return (
    <div>
      <form className="formLogIn">
        <button className="X" onClick={props.close}>X</button>
        <img src={bandaid} alt="LogoLogin" className="LogoLogin" />
        <p id="p1">LOGIN</p>
        <p id="p2">EMAIL</p>
        <input
          // value={this.state.email}
          name="email"
          onChange={props.handleInputChange}
          type="text"
          placeholder=""
        />
        <p id="p2">PASSWORD</p>
        <input
          // value={this.state.password}
          name="password"
          onChange={props.handleInputChange}
          type="text"
          placeholder=""
        />
        <button
          className="loginButton"
          onClick={props.handleFormSubmit}
          onClick={props.close}>Log in</button>
      </form>
    </div>
  );
}

export default FormLogIn;