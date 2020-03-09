import React from 'react';
import './Search.css'
import PropTypes from "prop-types";

class Search extends React.Component {
    // state = {
    //     text: ""
    // }
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    static propTypes = {
        send: PropTypes.func
    };


    // onChange = e => this.setState({ [e.target.name]: e.target.value });

    // onSubmit = (genre) => {
    //     // e.preventDefault();
    //     console.log("SUBMIT", genre)
    //     console.log("PROPS", this.props)
    //     console.log("state", this.text)

    //     this.props.searchResult(this.state.text);
    //     // this.setState({ text: "" });
    // }

    render() {

        const { send } = this.props;

        // console.log("RENDER PROPS", this.props) 

        return (
            <React.Fragment>
                    <div className="container">

                        <div className="whiteSpace"></div>

                        <form
                            className="form"
                            // onSubmit={this.onSubmit}
                            >

                            <input //Search input
                                className="searchInput"
                                type="text"
                                name="text"
                                placeholder="Search band styles to book..."
                                // value={this.state.text}
                                // onChange={this.onChange}
                                ref={this.textInput}
                                >
                            </input>

                            <button //Search button 
                                type="button"
                                value="search"
                                className="searchButton"
                                // onClick={()=>this.props.searchResult(this.state.text)}
                                // disabled={!(this.state. && this.state.)}
                                // onClick={ () => this.onSubmit(this.state.text)}
                                // onClick={() => this.props.searchResult(this.state.text)}
                                onClick={() => {
                                    send(this.textInput.current.value);

                                }}
                            // style={}     
                            > Search
                        </button>
                        </form>
                    </div>

            </React.Fragment>

        );
    }
}

export default Search

