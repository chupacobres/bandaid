import React, { Component } from 'react';
import BandItem from './BandItem';
import './Bands.css'
// import API from "../../utils/API";
// import axios from 'axios';

class Bands extends Component {
    constructor(props) {
        super(props);
        console.log("Bands this.props:", this.props) //nothing
    }

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    render() {
        console.log("this.props.genre: ", this.props.genre)
        //filter by genre
        let filterBandsByGenre = this.props.bands.filter(band => {
            // return band.genre === this.props.genre
            // return band.genre.toLowerCase().indexOf(this.props.genre.toLowerCase()) !== -1;  
            // return band.genre.indexOf(this.props.genre) !== -1;  
            return band.genre !== -1;  
        })

        //return the genre and map through all bands with that genre
        return (
            <div className="divMap">
                {filterBandsByGenre.map((pickle,index) => (
                    <BandItem key={index} taco={pickle} />
                ))}
            </div>
        )
    }
}

export default Bands;