import React from './node_modules/react';
import './Modal.css';
import FormLogIn from './FormLogIn';


function Modal(props) {
    return (
        <div>
            <FormLogIn
                close={props.close}
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit} />
        </div>
    )
}

export default Modal;