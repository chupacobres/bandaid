import React from 'react';
import "./Results.css";

const Results = ({ avatar_url} = this.props.result) => {
        return (
            <div className="card" >
            <img
                    src={avatar_url} alt="" className="imageBand" alt="imageBand Here"
                />
                <div>
                    <button href="" className="btn" > More</button>
                </div>
            </div>
        )
}


export default Results;
