import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
    state = {
        text: ""
    }

    onChange = e => {
        console.log("function1")
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        console.log(this.state.text)
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="whiteSpace"></div>

                    <form
                        className="form"
                        onSubmit={this.onSubmit}>

                        <input 
                            className="searchInput"
                            type="text"
                            name="text"
                            placeholder="Search bands..."
                            value={this.state.text}
                            onChange={this.onChange}></input>
                        <input
                            type="submit"
                            value="search"
                            className="searchButton">
                        </input>
                    </form>

                </div>

            </div>
        )
    }
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
