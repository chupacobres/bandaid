import React from 'react';
import "./BandItem.css";

const BandItem = (props) => {
    // console.log("taco", props.taco)
    return (
        <div className="card" >

            <p>{props.taco.name}</p>
            <p >{props.taco.email}</p>
            <p>{props.taco.genre}</p>
            <p>{props.taco.youtubeUrl}</p>

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
