//import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
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
    console.log("componentDidMount");
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {

    // Optimization: Keep var name short

    const { monsters, searchField } = this.state; // shorten this.state
    const { onSearchChange } = this; // shorten this.
    // Course #42 Nodes
    // Instead of modifying monsters = user, fetched from a web server
    // [1] Move filteredMonsters out of return {}, as a new array based on data this.state.monsters and this.state.searchField
    // [2] this.state.monsters is already avaliable, need to have access to searchField which is an input from client and used to filter monsters
    // [3] filteredMonsters is a list of filtered monsters based on this.state.searchField
    // [4] this.state.searchField is an input event.target.value updated whenever onChange happens
    // [5] Use filteredMonsters to show h1 monster.name
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }); // Then, we need access to searchString so add an property to this.state for searchString, updated as searchField


    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={onSearchChange}
          /*
          onChange={(event) => {
            //console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase(); 
            //const searchString = event.target.value.toLocaleLowerCase(); 
            // searchString is updated as searchField as a prop in this.state
            /*Move filtered Monsters out of return in render()
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            }); 
            // This onChange function is not stored and rebuilt every time it renders.
            // To optimize it

            
            this.setState(() => {
              // return { monsters:filteredMonsters}; 
              // directly changed array monsters and the original full list of users will be revised
              // That's bad! 
              // Instead we return searchField
              return { searchField:searchField } // return {this.state.prop: value to assign}
              
            });
            
          }}*/
        />
        

        
        {/*filteredMonsters.map((monster) => {
          // as filteredMonsters is constantly updated based on sear
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div> // replaced by <CardList/>
          );
        })*/} 
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
