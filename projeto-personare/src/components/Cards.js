import { Card } from "./styled";

const Cards = (props) => {
  return (
    <Card>
      <img
        src={props.backCard}
        alt={props.cardName}
        name={props.cardImage}
        onClick={props.onClick}
      />
    </Card>
  );
};

export default Cards;
