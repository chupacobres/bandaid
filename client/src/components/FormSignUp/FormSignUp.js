import React, { Component } from 'react';
import axios from 'axios';
import '../FormSignUp/FormSignUp.css';
import API from '../../utils/API'


export default class FormSignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeCreateName = this.onChangeCreateName.bind(this);
    this.onChangeCreateEmail = this.onChangeCreateEmail.bind(this);
    this.onChangeCreatePassword = this.onChangeCreatePassword.bind(this);
    this.onChangeCreateGenre = this.onChangeCreateGenre.bind(this);
    this.onChangeCreateSetup = this.onChangeCreateSetup.bind(this);
    this.onChangeCreateDescription = this.onChangeCreateDescription.bind(this);
    this.onChangeCreateYoutubeUrl = this.onChangeCreateYoutubeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      band_name: '',
      band_email: '',
      band_password: '',
      band_genre: '',
      band_setup: '',
      band_description: '',
      band_youtubeurl: ''
    }
  }

  onChangeCreateName(e) {
    this.setState({
      band_name: e.target.value
    });
  }

  onChangeCreateEmail(e) {
    this.setState({
      band_email: e.target.value
    });
  }

  onChangeCreatePassword(e) {
    this.setState({
      band_password: e.target.value
    });
  }

  onChangeCreateGenre(e) {
    this.setState({
      band_genre: e.target.value
    });
  }

  onChangeCreateSetup(e) {
    this.setState({
      band_setup: e.target.value
    });
  }

  onChangeCreateDescription(e) {
    this.setState({
      band_description: e.target.value
    });
  }

  onChangeCreateYoutubeUrl(e) {
    this.setState({
      band_youtubeurl: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`band Name: ${this.state.band_name}`);
    console.log(`band Email: ${this.state.band_email}`);
    console.log(`band Password: ${this.state.band_password}`);
    console.log(`band Genre: ${this.state.band_genre}`);
    console.log(`band Setup: ${this.state.band_setup}`);
    console.log(`band Description: ${this.state.band_description}`);
    console.log(`band Youtube: ${this.state.band_youtube}`);

    const newBand = {
      band_name: this.state.band_name,
      band_email: this.state.band_email,
      band_password: this.state.band_password,
      band_genre: this.state.band_genre,
      band_setup: this.state.band_setup,
      band_description: this.state.band_description,
      band_youtube: this.state.band_youtube
    }

    axios.post('http://localhost:3000/band/add', newBand)
      .then(res => console.log("axios.post", res.data));

    this.setState({
      band_name: '',
      band_email: '',
      band_password: '',
      band_genre: '',
      band_setup: '',
      band_description: '',
      band_youtube: ''
    })
  }
  render() {
    return (
      <div>
        <form className="formSignUp" onSubmit={this.onSubmit}>

          <label htmlFor="bandname">Band name:</label>
          <input type="text" id="bandname" name="bandname"value={this.state.band_name}onChange={this.onChangeCreateName}></input>

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={this.state.band_email}onChange={this.onChangeCreateEmail}></input>

          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" value={this.state.band_password}onChange={this.onChangeCreatePassword}></input>

          <label htmlFor="genre">Genre:</label>
          <input type="text" id="bgenre" name="bgenre" value={this.state.band_genre}onChange={this.onChangeCreateGenre}></input>

          <label htmlFor="setup">Set-up:</label>
          <input type="text" id="lineup" name="lineup" value={this.state.band_lineup}onChange={this.onChangeCreateSetup}></input>

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={this.band_description}onChange={this.onChangeCreateDescription}></input>

          <label htmlFor="youtube">Youtube URL:</label>
          <input type="url" id="youtube" name="youtube" value={this.state.band_youtubeurl}onChange={this.onChangeCreateYoutubeUrl}></input> 

          <button type="submit" id="signUpButton" value="Add Band">Sign Up</button>
        </form>
      </div>
    )
  }
}

