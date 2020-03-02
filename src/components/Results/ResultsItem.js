import React, { Component } from 'react';
import "./Results.css";

class Results extends Component {
    state = {
        id: ' ',
        avatar_url: ' '
    };
    render() {
       const { avatar_url} = this.state
        return (
            <div className="card text-center" > Band Info
            <img
                    src={avatar_url} alt="" className="image band"
                />
                <div>
                    <a href="#" className="btn bt-secondary btn-sm my-1" > More </a>
                </div>
            </div>
        )
    }
}


export default Results;


