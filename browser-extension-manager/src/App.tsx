import { useEffect, useState } from "react";
import CardsWrapper from "./components/CardsWrapper";
import Title from "./components/Title";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <div className="container">
        <Title setDarkMode={setDarkMode} />
        <CardsWrapper />
      </div>
    </>
  );
}
export default App;
