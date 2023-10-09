import React from "react";
import { useAxios } from "./hooks";
import { formatCard } from "./helpers";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a Card, Any Card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a Playing Card!</button>
        <button onClick={clearCards}>Clear Table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
