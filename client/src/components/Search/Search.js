import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" name="text" placeholder="Search bands..."></input>
                    <input type="submit" value="search" className="searchBar"></input>
                </form>
            </div>
        )
    }
}

export default Search
