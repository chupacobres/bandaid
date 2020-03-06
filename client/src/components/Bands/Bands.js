import React, { Component } from 'react';
import BandItem from './BandItem';
import './Bands.css'

class Bands extends Component {
    state = {
        bandsList : [
            {
                id: '1',
                avatar_url: '',
                avatar_href: ''
            },
            {
                id: '2',
                avatar_url: '',
                avatar_href: ''
            }
        ]
    }
    render() {
        return (
            <div className="divMap">
                {this.state.results.map(result => (
                    <BandItem key={this.state.bandList} result={result} /> 
                ))}
            </div>
        )
    }
}


export default Bands;