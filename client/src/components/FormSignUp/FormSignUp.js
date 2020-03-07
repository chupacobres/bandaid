import React, { Component } from "react";
import "./FormSignUp.css";


export class FormSignUp extends Component {
    render() {
        return (
            <div>
                <form className="formSignUp">
                    <label for="bandName">Band name:</label>
                    <input type="text" id="bname" name="bname"></input>
                    <label for="email">email:</label>
                    <input type="text" id="email" name="email"></input>
                    <label for="genre">Genre:</label>
                    <input type="text" id="genre" name="genre"></input>
                    <label for="lineup">Line-up:</label>
                    <input type="text" id="lineup" name="lineup"></input>
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location"></input>
                    {/* IMAGE DOWNLOAD  or YOUTUBE LINK */}
                    <button type="submit" id="signUpButton">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default FormSignUp;
