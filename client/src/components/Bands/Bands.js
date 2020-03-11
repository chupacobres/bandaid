import React, { Component } from 'react';
import BandItem from './BandItem';
import './Bands.css'
// import API from "../../utils/API";
import axios from 'axios';

class Bands extends Component {
    state = {
        bands: "",
    };

    componentDidMount() {
        axios.get('http://localhost:3001/all/rock').then(res => {
            console.log(res);
            this.setState({ bands: res.data });
        });
    };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    render() {
        console.log("bands ", this.state)
        return (
            <div className="divMap">
                {/* {this.state.bands.map(result => (
                    <BandItem key={this.state.bandList} result={result} />
                ))} */}
                <p>hello</p>
            </div>
        )
    }
}


export default Bands;