import CardFunc from "../card/card.component.func";
import "./card-list.styles.css";

// Or 
// const CardList = ({monsters}) { ... } so skip the first line const {monsters} = props
const CardListFunc = ({monsters}) => (
  //const { monsters } = props;
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardFunc monster ={ monster }/>;
    })}
  </div>
);

export default CardListFunc;
