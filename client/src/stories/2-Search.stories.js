import React, { Component } from 'react'
import '../components/Search/Search.css'
import Search from '../components/Search/Search'
import { storiesOf } from '@storybook/react';


    storiesOf('Search', module)
.add('search', () => <Search />);
            // <div>
            //     <div className="container">

            //         <div className="whiteSpace"></div>

            //         <form
            //             className="form"
            //             onSubmit={this.onSubmit}>

            //             <input //Search input
            //                 className="searchInput"
            //                 type="text"
            //                 name="text"
            //                 placeholder="Search bands..."
            //                 value={this.state.text}
            //                 onChange={this.onChange}>
            //             </input>

            //             <button //Search button 
            //                 type="submit"
            //                 value="search"
            //                 className="searchButton"
            //                 onClick={this.handleFormSubmit}
            //             > Search
            //             </button>
            //         </form>
            //     </div>
            // </div>



//  export default {
//     title: 'Search',
//     component: Search
//   };
  
  
