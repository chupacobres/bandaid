import React, { Component } from 'react';
import axios from 'axios';
import '../FormSignUp/FormSignUp.css';
// import API from '../../utils/API'


export default class FormSignUp extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      genre: '',
      setup: '',
      description: '',
      youtube: ''
    }
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`band Name: ${this.state.name}`);
    console.log(`band Email: ${this.state.email}`);
    console.log(`band Password: ${this.state.password}`);
    console.log(`band Genre: ${this.state.genre}`);
    console.log(`band Setup: ${this.state.setup}`);
    console.log(`band Description: ${this.state.description}`);
    console.log(`band Youtube: ${this.state.youtube}`);

    const newBand = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      genre: this.state.genre,
      setup: this.state.setup,
      description: this.state.description,
      youtubeVideo: this.state.youtube
    }

    axios.post('http://localhost:3001/bands/add', newBand)
      .then(res => console.log("axios.post", res));

    this.setState({
      name: '',
      email: '',
      password: '',
      genre: '',
      setup: '',
      description: '',
      youtube: ''
    })
  }
  render() {
    return (
      <div>
        <form className="formSignUp" onSubmit={this.onSubmit}>

          <label htmlFor="bandname">Band name:</label>
          <input type="text" id="bandname" name="name" value={this.state.name} onChange={this.handleChange}></input>

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>

          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

          <label htmlFor="genre">Genre:</label>
          <input type="text" id="bgenre" name="genre" value={this.state.genre} onChange={this.handleChange}></input>

          <label htmlFor="setup">Set-up:</label>
          <input type="text" id="lineup" name="setup" value={this.state.setup} onChange={this.handleChange}></input>

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}></input>
          
          <label htmlFor="youtube">Youtube video ID:</label>
          <input type="url" id="youtube" name="youtube" value={this.state.youtube} onChange={this.handleChange}></input> 

          <button type="submit" id="signUpButton" value="Add Band" onClick={this.onSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}

