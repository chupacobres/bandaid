import React, { Component } from 'react';
import BandItem from './BandItem';
import './Bands.css'
import API from "../../utils/API";

class Bands extends Component {
    state = {
        bands: [],
        name: "",
        email: "",
        password: "",
        genre: "",
        setup: "",
        description: "",
        youtubeUrl: "",
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

    deleteBand = id => {
        API.deleteBand(id)
            .then(res => this.loadBands())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.password && this.state.genre && this.state.setup && this.state.description && this.state.youtubeUrl) {
            API.saveBand({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                genre: this.state.genre,
                setup: this.state.setup,
                description: this.state.description,
                youtubeUrl: this.state.youtubeUrl
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
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