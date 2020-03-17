import React, { Component } from 'react';
import "./FormLogIn.css";
// import bandaid from "../../assets/bandaid.png";

  const FormLogIn = props => (
        <div>
          <form className="formLogIn">
            {/*
          <img src={bandaid} alt="LogoLogin" className="LogoLogin" />
          <p id="p1">LOGIN</p> */}
  
            <p id="p2">EMAIL</p>
            <input
              autoComplete="off"
              value={"rebolu@gmail.com"}
              name="email"
              // onChange={props.onChange}
              type="text"
              placeholder=""
            />
            <p id="p2">PASSWORD</p>
            <input
              name="password"
              // value={props.password}
              value={'12341234'}
              // onChange={props.onChange}

              type="text"
              placeholder=""
            />
            <button
            type="button"
              className="loginButton"
              onClick={props.checkLoginStatus}
            // onClick={props.close}
            >Log in</button>
          </form>
        </div >
  );
  
  
  export default FormLogIn;













  // constructor(props) {
  //   super(props);
  // props.handleInputChange = props.handleInputChange.bind(props);
  // state = {
  //   email: "",
  //   password: "",
  //   // band: {}
  // };

  // onChange = (e) => {
  //   console.log(props.state)
  //   props.setState({ [e.target.name]: e.target.value })
  // }

  // setState = {
  //   email: '',
  //   password: '',
  // };

  // handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   const band = {
  //     email: props.state.email,
  //     password: props.state.password
  //   }
  // }

//   render() {
//     return (
//       <div>
//         <form className="formLogIn">
//           {/* <button className="X" onClick={props.close}>X</button>
//         <img src={bandaid} alt="LogoLogin" className="LogoLogin" />
//         <p id="p1">LOGIN</p> */}

//           <p id="p2">EMAIL</p>
//           <input
//             value={props.state.email}
//             name="email"
//             onChange={props.onChange}
//             type="text"
//             placeholder=""
//           />
//           <p id="p2">PASSWORD</p>
//           <input
//             value={props.state.password}
//             name="password"
//             onChange={props.onChange}
//             type="text"
//             placeholder=""
//           />
//           <button
//             className="loginButton"
//             onClick={props.handleFormSubmit}
//           // onClick={props.close}
//           >Log in</button>
//         </form>
//       </div >
//     );
//   }
// }

// export default FormLogIn;