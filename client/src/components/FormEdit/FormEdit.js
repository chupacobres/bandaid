import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      band: {}
    };
  }

  componentDidMount() {
    axios.get('/bands'+this.props.match.params.id)
      .then(res => {
        this.setState({ band: res.data });
        console.log(this.state.band);
      });
  }

  onChange = (e) => {
    const state = this.state.band
    state[e.target.name] = e.target.value;
    this.setState({band:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, genre, setup, description, youtubeVideoId } = this.state.band;

    axios.put('/bands'+this.props.match.params.id, { name, email, password, genre, setup, description, youtubeVideoId })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT BOOK
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.book._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name: </label>
                <input type="text" class="form-control" name="name" value={this.state.band.name} onChange={this.onChange} placeholder="" />
              </div>
              <div class="form-group">
                <label for="email">Email: </label>
                <input type="text" class="form-control" name="email" value={this.state.band.email} onChange={this.onChange} placeholder="" />
              </div>
              <div class="form-group">
                <label for="password">Password: </label>
                <input type="text" class="form-control" name="password" value={this.state.band.password} onChange={this.onChange} placeholder="" />
              </div>
              <div class="form-group">
                <label for="genre">Genre: </label>
                <input type="text" class="form-control" name="genre" value={this.state.band.genre} onChange={this.onChange} placeholder="Genre" />
              </div>
              <div class="form-group">
                <label for="setup">Setup: </label>
                <input type="text" class="form-control" name="setup" value={this.state.band.setup} onChange={this.onChange} placeholder="" />
              </div>
              <div class="form-group">
                <label for="description">Description: </label>
                <input type="text" class="form-control" name="description" value={this.state.band.description} onChange={this.onChange} placeholder="" />
              </div>
              <div class="form-group">
                <label for="youtubevideo">Youtube Video ID: </label>
                <input type="text" class="form-control" name="youtubeVideoId" value={this.state.band.youtubeVideoId} onChange={this.onChange} placeholder="" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;