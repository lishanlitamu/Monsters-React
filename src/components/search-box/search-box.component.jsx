import { Component } from "react";
import "./search-box.styles.css";
// every other elements with the same class will apply the same style
 class SearchBox extends Component {
    render() {
        return (
            // copy the input element from App.js
            <input
            type="search"
            // className="search-box"
            //placeholder="search monsters"
            // onChange={onSearchChange}
            // className = {this.props.className}
            // give className a general search-box and additional monsters-search-box
            // allow .css files to style them differently
            className = {`search-box ${this.props.className}`}
            placeholder = {this.props.placeholder}
            onChange={this.props.onChangeHandler}
            />
        )
    }
 }

 export default SearchBox