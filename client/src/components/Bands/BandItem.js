import React from 'react';
import "./BandItem.css";
import ReactYouTubeLink from '../ReactYouTube/ReactYouTubeLink';

const BandItem = (props) => {


    console.log("taco", props.taco) //entire taco AKA band data

    const videoId = props.taco.linkYouTube;

    console.log("videoId BandItem.js", videoId) //undefined


    return (
        <div className="card" >

            <p>"{props.taco.name}" Genre : {props.taco.genre}</p>

            {/* <ReactYouTubeLink videoId='Rj1ZBv_J3tw' /> //This link works */}

            <ReactYouTubeLink videoId={videoId} />

            <p >{props.taco.email}</p>

            {/* <button href={'avatar_href'} className="btn" > More</button> */}

        </div> 
    )
}


export default BandItem;
