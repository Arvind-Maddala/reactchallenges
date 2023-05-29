import React, { useState } from "react";
import ChildComponents from "../child/ChildComponents";
import "../../App.css";
const ParentComponent = ({ ParentTheme, handleParentChangeFromApp }) => {
  const [childTheme, setChildTheme] = useState("light");
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChildTheme((prev) => (prev === "light" ? "dark" : "light"));
    setChecked(!checked);
  };
  const handleParentChange = () => {
    handleParentChangeFromApp(childTheme);
    setChecked(!checked);
  };

  return (
    <div>
      Dark mode: <input type="checkbox" onChange={handleParentChange} />
      <h1>
        {" "}
        The entire page color theme is controlled using CSS and JavaScript
      </h1>
      <div>
        Contained dark mode:{" "}
        <input
          type="checkbox"
          value={childTheme}
          onChange={handleChange}
          checked={checked}
        />
        <div className={childTheme === "light" ? "child" : "childDark"}>
          <ChildComponents />
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
