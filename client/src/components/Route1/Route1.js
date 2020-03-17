// import React from 'react';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import FormLogIn from '../FormLogIn/FormLogIn';

function Route1 (props) { //standard way component and rest operator

    return (
        //regular component
        props.loginStatus ? (
            <div>
                <Route1 />
            </div>
        ) : (
                <Redirect to='/account' />
            )
    )
}

// <Route  render={props => (
//     props.isAuthenticated ? (
//         <FormLogIn {...props} />
//     ) : (
//             <Redirect to={{
//                 pathname: '/account',
//                 state: { from: props.location }
//             }} />
//         )
// )} />

export default Route1;