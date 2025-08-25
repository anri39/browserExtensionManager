import { useEffect, useState } from "react";
import Cards from "./Cards";
import "./CardsWrapper.css";

type CardType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  id: string;
};

export default function CardsWrapper() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="cardsWrapper">
      {cards.map((c) => (
        <Cards
          key={c.id}
          logo={c.logo}
          name={c.name}
          description={c.description}
          isActive={c.isActive}
        />
      ))}
    </div>
  );
}
