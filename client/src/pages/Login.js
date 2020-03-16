import React, { Component } from "react";
import FormLogIn from '../components/FormLogIn/FormLogIn';

class LogIn extends Component {



    



    render() {
        return (
            <div className="divApp">
                <FormLogIn
                    handleInputChange={this.props.handleInputChange}
                    handleFormSubmit={this.props.handleFormSubmit} />
            </div>
        );
    }
}

export default LogIn;