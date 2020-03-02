import React, { Component } from 'react';
import ResultsItem from './ResultsItem';

class Results extends Component {
    state = {
        results: [
            {
                id: '1',
                avatar_url: ''
            },
            {
                id: '2',
                avatar_url: ''
            }
        ]
    }
    render() {
        return (
            
            //loop through ResultsItem and create a list 
            <div className="divMap">
                {this.state.results.map(result => (
                    <ResultsItem key={result.id} result={result} /> //passing state to ResultsItem as a prop
                ))}
            </div>
        )
    }
}


export default Results;
