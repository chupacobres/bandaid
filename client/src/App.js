import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Results from './components/Results/Results'

class App extends Component {
  state= {
    results: []
  }
  render() {
    return (
      <div className="divApp" >
        <Navigation />
        <Results results={this.state.results} />
      </div>
    );
  }
}


export default App;