import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function App() {
  const [number, setNumber] = useState("");
  console.log(number);
  return (
    <div>
      <PhoneInput
        country={"in"}
        onlyCountries={["in"]}
        value={number}
        onChange={(phone) => setNumber(phone)}
      />
    </div>
  );
}

export default App;
