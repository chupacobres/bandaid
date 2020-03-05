import React, { Component } from 'react'
import './Search.css'
import homeImg from '../../assets/homeImg.png'
// import './Image.css'


function Search() {
    return (
        <div>
        <div className="container">
            <div className="whiteSpace"></div>
            <form className="form">
                <input className="searchInput" type="text" name="text" placeholder="Search bands..."></input>
                <input type="submit" value="search" className="searchButton"></input>
            </form>
        </div>
        </div>
    )
}

export default Search



// function Image() {
//     return (
//         <div>
//             <div className="whiteSpace"></div>
//             <div>
//                 <img src={homeImg} alt="homeImg" className="homeImg" />
//             </div>
//         </div>
//     )
// }

// export default Image;
