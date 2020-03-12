import React from 'react';
import "./Bands.css";

const BandItem = (props) => {
    // console.log("taco", props.taco)
    return (
        <div className="card" >

            <h2 >{props.taco.name}</h2>
            <h2 >{props.taco.email}</h2>
            <h2 >{props.taco.genre}</h2>

            {/* <img
                src={avatar_url} alt="" className="imageBand"
            />
            <div>
                <button href={'avatar_href'} className="btn" > More</button>
            </div> */}
        </div>
    )
}


export default BandItem;
