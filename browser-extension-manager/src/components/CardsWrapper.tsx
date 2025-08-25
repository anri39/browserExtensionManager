import { useEffect, useState } from "react";
import Cards from "./Cards";
import "./CardsWrapper.css";
import CardsHeader from "./CardsHeader";

type CardType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  id: string;
};

export default function CardsWrapper() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [filter, setFilter] = useState<"all" | "inactive" | "active">("all");

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

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    if (filter === "active") return card.isActive;
    if (filter === "inactive") return !card.isActive;
    return true;
  });

  return (
    <div className="main">
      <CardsHeader selectedFilter={filter} setSelectedFilter={setFilter} />
      <div className="cardsWrapper">
        {filteredCards.map((c) => (
          <Cards
            key={c.id}
            logo={c.logo}
            name={c.name}
            description={c.description}
            isActive={c.isActive}
          />
        ))}
      </div>
    </div>
  );
}
