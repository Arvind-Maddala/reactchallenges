import "./App.css";
import ParentComponent from "./components/parent/ParentComponent";
import { useState } from "react";

function App() {
  const [ParentTheme, setParentTheme] = useState("light");
  const handleParentChange = () => {
    setParentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={ParentTheme === "light" ? "parent" : "parentDark"}>
      <ParentComponent
        handleParentChangeFromApp={handleParentChange}
        ParentTheme={ParentTheme}
      />
    </div>
  );
}

export default App;
