import React, { Component } from 'react';
import axios from 'axios';
import FormSignUp from '../FormSignUp/FormSignUp';
// import { Link } from 'react-router-dom';


class FormEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      band: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/bands/' + this.props.match.params.id)
      .then(res => {
        this.setState({ band: res.data });
        console.log(this.state.band);
      });
  };


  onChange = (e) => {
    const state = this.state.band
    state[e.target.name] = e.target.value;
    this.setState({ band: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, genre, setup, description, youtubeVideoId } = this.state.band;

    axios.put('/bands' + this.props.match.params.id, { name, email, password, genre, setup, description, youtubeVideoId })
      .then((result) => {
        this.props.history.push("/bands" + this.props.match.params.id)
      });
  }

  render() {
    return (
      <div>
        <FormSignUp/>
      </div>
      // <div class="container">
      //   <div class="panel panel-default">
      //     <div class="panel-heading">
      //       <h3 class="panel-title">
      //         EDIT FORM
      //       </h3>
      //     </div>
      //     <div class="panel-body">
      //       {/* <h4><Link to={`/bands/${this.state.band._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4> */}
      //       <form >
      //         <div class="form-group">
      //           <label for="name">Name: </label>
      //           <input type="text" class="form-control" name="name" value={this.state.band.name} onChange={this.onChange} placeholder="" />
      //         </div>
      //         <div class="form-group">
      //           <label for="email">Email: </label>
      //           <input type="text" class="form-control" name="email" value={this.state.band.email} onChange={this.onChange} placeholder="" />
      //         </div>
      //         <div class="form-group">
      //           <label for="password">Password: </label>
      //           <input type="text" class="form-control" name="password" value={this.state.band.password} onChange={this.onChange} placeholder="" />
      //         </div>
      //         <div class="form-group">
      //           <label for="genre">Genre: </label>
      //           <input type="text" class="form-control" name="genre" value={this.state.band.genre} onChange={this.onChange} placeholder="Genre" />
      //         </div>
      //         <div class="form-group">
      //           <label for="setup">Setup: </label>
      //           <input type="text" class="form-control" name="setup" value={this.state.band.setup} onChange={this.onChange} placeholder="" />
      //         </div>
      //         <div class="form-group">
      //           <label for="description">Description: </label>
      //           <input type="text" class="form-control" name="description" value={this.state.band.description} onChange={this.onChange} placeholder="" />
      //         </div>
      //         <div class="form-group">
      //           <label for="youtubevideo">Youtube Video ID: </label>
      //           <input type="text" class="form-control" name="youtubeVideoId" value={this.state.band.youtubeVideoId} onChange={this.onChange} placeholder="" />
      //         </div>
      //         <button type="submit" class="btn btn-default" onClick={this.onSubmit}>Submit</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    // );
  }
}

export default FormEdit;