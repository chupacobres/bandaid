import React from 'react';
import "./Bands.css";

const BandItem = (props) => {
    console.log("taco", props.taco)
    return (
        <div className="card" >
            {/* <img
                src={avatar_url} alt="" className="imageBand"
            />
            <div>
                <button href={'avatar_href'} className="btn" > More</button>
            </div> */}
            <h2 >{props.taco.name}</h2>

        </div>
    )
}


export default BandItem;
