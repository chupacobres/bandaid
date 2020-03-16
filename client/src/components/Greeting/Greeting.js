
import React, {Component} from 'react';
import UserGreeting from '../UserGreeting/UserGreeting'
import GuestGreeting from '../GuestGreeting/GuestGreeting'
import './Greeting.css'



function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//   );


  export default Greeting;