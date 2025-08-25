import "./CardsHeader.css";

type CardHeaderProps = {
  selectedFilter: "all" | "active" | "inactive";
  setSelectedFilter: (filter: "all" | "active" | "inactive") => void;
};

export default function CardsHeader({
  setSelectedFilter,
  selectedFilter,
}: CardHeaderProps) {
  return (
    <div className="cardsHeader">
      <h1>Extensions List</h1>
      <div className="buttonWrapper">
        <button
          onClick={() => {
            setSelectedFilter("all");
          }}
          className={selectedFilter === "all" ? "Active" : ""}
        >
          All
        </button>

        <button
          onClick={() => {
            setSelectedFilter("active");
          }}
          className={selectedFilter === "active" ? "Active" : ""}
        >
          Active
        </button>

        <button
          onClick={() => {
            setSelectedFilter("inactive");
          }}
          className={selectedFilter === "inactive" ? "Active" : ""}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
