//import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { render } from "@testing-library/react";
import { useState, useEffect, Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], // Therefore, monsters = users is untouched while searchField is constantly updated
      searchField: "", // searchString is added so filteredMonsters outside of return can use it
    };
  }

  componentDidMount() {
    //console.log("componentDidMount");
    //whenever .setState is called it rerenders
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState( 
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  // in search box using onChange = {this.props.onChangeHandler}
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField }; // return an array
    });
  };

  render() {
    //console.log('render from app.js')
    // Optimization: Keep var name short
    const { monsters, searchField } = this.state; // shorten this.state
    const { onSearchChange } = this; // shorten this.
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }); // Then, we need access to searchString so add an property to this.state for searchString, updated as searchField

    // render a search box and a CardList object
    // SearchBox requires a prop named onChangeHandler 
    // As SearchBox needs to use a function onSearchChange in App.js
    // We set SearchBox requires a prop named onChangeHandler 
    // then put {onSearchChange} as an prop input
    return (
      <div className="App">
        <h1 className="app-title">WHATEVER</h1>
        <SearchBox className = "monsters-search-box" onChangeHandler = {onSearchChange} placeholder = 'search for ' />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
