import "./CardsHeader.css";
import { useState } from "react";

export default function CardsHeader() {
  const [selected, setSelected] = useState<string>("All");
  return (
    <div className="cardsHeader">
      <h1>Extensions List</h1>
      <div className="buttonWrapper">
        <button
          onClick={() => {
            setSelected("All");
          }}
          className={selected === "All" ? "Active" : ""}
        >
          All
        </button>
        <button
          onClick={() => {
            setSelected("Active");
          }}
          className={selected == "Active" ? "Active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => {
            setSelected("Inactive");
          }}
          className={selected === "Inactive" ? "Active" : ""}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
