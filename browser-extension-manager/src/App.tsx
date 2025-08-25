import CardsHeader from "./components/CardsHeader";
import CardsWrapper from "./components/CardsWrapper";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="container">
        <Title />
        <CardsHeader />
        <CardsWrapper />
      </div>
    </>
  );
}
export default App;
