import React from 'react';
import "./BandItem.css";
import ReactYouTubeLink from '../ReactYouTube/ReactYouTubeLink';

const BandItem = (props) => {


    console.log("taco", props.taco) //entire taco AKA band data

    const videoId = props.taco.youtubeVideo; //UNDEFINED
    console.log("videoId BandItem.js", videoId)


    return (
        <div className="card" >

            <p>"{props.taco.name}" Genre : {props.taco.genre}</p>

            {/* YOUTUBE LINK */}
            {/* <ReactYouTubeLink videoId='Rj1ZBv_J3tw' /> //This link works! but we need all of them */}
            {/* they go IN HERE: */}
            <ReactYouTubeLink videoId={videoId} />

            <p className="customFont">{props.taco.email}</p>
            <p className="mediumFont">{props.taco.setup}</p>
            <p className="smallFont">{props.taco.description}</p>
            {/* <button href={'avatar_href'} className="btn" > More</button> */}

        </div>
    )
}


export default BandItem;
