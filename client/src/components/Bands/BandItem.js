import React from 'react';
import "./BandItem.css";
import ReactYouTubeLink from '../ReactYouTube/ReactYouTubeLink';

const BandItem = (props) => {
    // console.log("taco", props.taco)
    return (
        <div className="card" >

            <p>"{props.taco.name}" Genre : {props.taco.genre}</p>



            <ReactYouTubeLink videoId='2_AInJHlK6Q' />

            {/* <ReactYouTubeLink videoId={props.taco.number} /> */}




            <p >{props.taco.email}</p>

        
                {/* <button href={'avatar_href'} className="btn" > More</button>
            </div> */}



        </div>
    )
}


export default BandItem;
