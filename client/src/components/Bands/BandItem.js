import React from 'react';
import "./Bands.css";

const BandItem = ({ avatar_url } = this.props.bandsList) => {
    return (
        <div className="card" >
            <img
                src={avatar_url} alt="" className="imageBand"
            />
            <div>
                <button href={'avatar_href'} className="btn" > More</button>
            </div>
        </div>
    )
}


export default BandItem;
