import React, { Component } from 'react';
import BandItem from './BandItem';
import './Bands.css'
// import API from "../../utils/API";
import axios from 'axios';

class Bands extends Component {
    state = {
        genre: "",
    };

    componentDidMount() {
        axios.get('/results').then(res => {
            console.log(res);
            this.setState({ genre: res.data });
        });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <div className="divMap">
                {this.state.results.map(result => (
                    <BandItem key={this.state.bandList} result={result} />
                ))}
                <p>hello</p>
            </div>
        )
    }
}


export default Bands;