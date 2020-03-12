import React, { Component } from 'react';
import BandItem from './BandItem';
import './Bands.css'
// import API from "../../utils/API";
// import axios from 'axios';

class Bands extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    // componentDidMount() {
    //     axios.get('http://localhost:3000/all').then(res => {
    //         console.log(res);
    //         this.setState({ bands: res.data });
    //     });
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    render() {
        console.log("bands ", this.props.test)
        return (
            <div className="divMap">
                {this.props.test.map(pickle => (
                    <BandItem taco={pickle} />
                ))}
                {/* <p>hello</p> */}
            </div>
        )
    }
}


export default Bands;