import React, { Component } from 'react';
import BandItem from './BandItem';
import './Bands.css'
// import API from "../../utils/API";
// import axios from 'axios';

class Bands extends Component {
    constructor(props) {
        super(props);
        console.log("Bands this.props:", this.props)
    }

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // filterBands = (name) => {
    //     this.props.test.filter(band => {
    //         return band.name === name
    //     })
    // console.log("filterBands() ", testBands)
    // }

    render() {
        //filter by genre
        let testBands = this.props.bands.filter(band => {
            return band.genre === this.props.genre
        })

        //return the genre and map through all bands with that genre
        return (
            <div className="divMap">
                {testBands.map(pickle => (
                    <BandItem key={this.props.id} taco={pickle} />
                ))}
            </div>
        )
    }
}

export default Bands;