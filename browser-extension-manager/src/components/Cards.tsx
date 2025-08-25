import { useState } from "react";
import "./Cards.css";

type CardsProps = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export default function Cards({
  logo,
  name,
  description,
  isActive,
}: CardsProps) {
  const [active, setActive] = useState(isActive);
  const [removed, setRemoved] = useState(false);

  if (removed) return null;

  return (
    <div className="Card">
      <div className="toppart">
        <img src={logo} alt={name} />
        <div className="desc">
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>

      <div className="bottompart">
        <button className="removeBtn" onClick={() => setRemoved(true)}>
          Remove
        </button>
        <label className="switch">
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
