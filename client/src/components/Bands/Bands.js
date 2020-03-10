import React, { Component } from 'react';
// import BandItem from './BandItem';
import './Bands.css'
import API from "../../utils/API";

class Bands extends Component {
    state = {
        genre: "",
    };

    componentDidMount() {
        this.loadBands();
    }

    loadBands = () => {
        API.getBands()
            .then(res =>
                this.setState({ bands: res.data, name: "", email: "", password: "", genre: "", setup: "", description: "", youtubeUrl: "" })
            )
            .catch(err => console.log(err));
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
                {/* {this.state.results.map(result => (
                    <BandItem key={this.state.bandList} result={result} />
                ))} */}
                <p>hello</p>
            </div>
        )
    }
}


export default Bands;