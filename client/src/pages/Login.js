import React, { Component } from "react";
import FormLogIn from '../components/FormLogIn/FormLogIn';

class LogIn extends Component {

    handleInputChange = () => {
        
    }




    render() {
        return (
            <div className="divApp">
                <FormLogIn
                    handleInputChange={this.props.handleInputChange}
                    handleFormSubmit={this.props.handleFormSubmit}
/>
                {/* this.state.show ?
                <FormLogIn
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.props.handleFormSubmit} />
                     : null */}
            </div>
        );
    }
}

export default LogIn;