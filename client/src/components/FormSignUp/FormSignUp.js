import React, { Component } from "react";
import "./FormSignUp.css";


export class FormSignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    <label for="bandName">Band name:</label>
                    <input type="text" id="bname" name="bname"></input>
                    <label for="email">email:</label>
                    <input type="text" id="email" name="email"></input>
                </form>
            </div>
        )
    }
}

export default FormSignUp;
