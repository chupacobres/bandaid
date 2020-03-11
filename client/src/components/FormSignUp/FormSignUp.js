import React, {Component} from 'react';
import axios from 'axios';
import "./FormLogIn.css";

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
    this.setstate({
      band_name: e.target.value
    });
  }

  onChangeCreateEmail(e) {
    this.setstate({
      band_email: e.target.value
    });
  }

  onChangeCreatePassword(e) {
    this.setstate({
      band_password: e.target.value
    });
  }

  onChangeCreateGenre(e) {
    this.setstate({
      band_genre: e.target.value
    });
  }

  onChangeCreateSetup(e) {
    this.setstate({
      band_setup: e.target.value
    });
  }

  onChangeCreateDescription(e) {
    this.setstate({
      band_description: e.target.value
    });
  }

  onChangeCreateYoutubeUrl(e) {
    this.setstate({
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
    .then(res => console.log(res.data));

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

                    <label for="bandName">Band name:</label>
                    <input type="text" id="bname" name="bname" value={this.state.band_name}></input>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value={this.state.band_email}></input>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" value={this.state.band_password}></input>

                    <label for="genre">Genre:</label>
                    <input type="text" id="genre" name="genre" value={this.state.band_genre}></input>

                    <label for="lineup">Set-up:</label>
                    <input type="text" id="lineup" name="lineup" value={this.state.band_lineup}></input>

                    <label for="description">Description:</label>
                    <input type="text" id="description" name="location"></input>
               
                    <label for="youtube">Youtube URL:</label>
                    <input type="url" id="youtube" name="youtube"></input>

                    <button type="submit" id="signUpButton" value="Add Band">Sign Up</button>
                </form>
            </div>
        )
    }
}

