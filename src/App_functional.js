//import { Component } from "react"; // Not for functional components
// use hooks for functional components
//import { useState } from "react"; // give us back two values

import CardListFunc from "./components/card-list/card-list.component.func";
import SearchBoxFunc from "./components/search-box/search-box.component.func";
import { useState, useEffect } from "react";
import "./App.css";
//functional
// .setState is a unique method for class components
const App = () => {
  const [searchField, setSearchField] = useState(""); // it give us back two values: [value, setValue]
  // [value, setValue] => [variable_name, method_to_update_value]
  // each useState hooks to one prop
  // ... = useState(initial_value)
  //
  
  //  need monsters which was stored in this.state.monsters in a class component
  // Now we use a functional component
  // use useState

  const [monsters, setMonsters] = useState([]);
  // can't use fetch and .then((users) => setMonsters(users));
  // because react think last users is different from the current users in memory
  // Therefore, it goes to infinity
  // React's quality check fails
  // Use useEffect => useEffect(call_back_func, array_of_dependencies) dependecies => state values or props
  // useEffect(run_this_func, whenever_these_values_changed)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString); // searchField is updated to searchFieldString
    // only when the value of searchField is updated by setSearchField, it rerenders
    // must be a different value

    // this.setState(() => {
    //   return { searchField: searchField }; // return an array
    // });
  };



  // In our case, we just wanna fetch once from website so pass in an empty array as dependencies
  // Instead of using .setState to assign values to monsters
  // Use setMonsters
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setMonsters(users)
      );
  }, []);

  // Below codes run whenever it rerenders from top to bottom
  // But actually we only wanna run it whenever searchField is changed
  // Use useEffect
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Hello, I am a functional App.</h1>
      <SearchBoxFunc
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardListFunc monsters={filteredMonsters} />
    </div>
  );
};

export default App;
