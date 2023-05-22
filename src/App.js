import { useState } from "react";

function App() {
  const [val, setVal] = useState(0);
  const [incrementVal, setIncrementVal] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1> {val}</h1>
      <div>
        <button
          style={{ marginRight: "1rem" }}
          onClick={() =>
            setVal((val) => val - Number(incrementVal > 0 ? incrementVal : 1))
          }
        >
          {" "}
          -{" "}
        </button>
        <button
          onClick={() =>
            setVal((val) => val + Number(incrementVal > 0 ? incrementVal : 1))
          }
        >
          {" "}
          +{" "}
        </button>
      </div>
      <p>
        {" "}
        Increment / decrement by{" "}
        <input
          value={incrementVal}
          onChange={(e) => setIncrementVal(e.target.value)}
        />
      </p>
      <button onClick={() => setVal(0)}>Reset </button>
    </div>
  );
}

export default App;
