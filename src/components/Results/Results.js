import React, { Component } from 'react';
import ResultsItem from './ResultsItem';

class Results extends Component {
    state = {
        results: [
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
                    <ResultsItem key={result.id} result={result} /> 
                ))}
            </div>
        )
    }
}


export default Results;