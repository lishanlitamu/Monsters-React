import { Component } from "react";
// component name's first character must be capital
// then react can tell that's a component made by the developer
import Card from "../card/card.component";
import "./card-list.styles.css";
import "../card/card.styles.css";
class CardList extends Component {
  // Course 45 Notes
  // return can only contain one entity or one component
  // In other words, you can expand div with many html elements inside it
  // but you can't add a sibling to <div>
  render() {
    // console.log('CardList Render')
    // Whenever props is updated, it rerenders
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
            return (<Card monster ={ monster }/>);
        })}
      </div>
      //<div> !! ERROR
    );
  }
}

export default CardList;
// allow other files to import cardList by default
// Lecture 47 
// Three cases to triger rendering or rerendering
// One is .setState() is used;
// The other is this.props is changed.
// The last one is when render() is called