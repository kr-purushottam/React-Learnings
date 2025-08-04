import { useState } from "react";

function FruitListStep3() {
  const [typedValue, setTypedValue] = useState("");

  return (
    <>
      <h2>Fruit List:</h2>

      <input
        type="text"
        placeholder="Type a fruit..."
        
        onChange={(e) => setTypedValue(e.target.value)}
      />

      <p>You typed: {typedValue}</p>
    </>
  );
}

export default FruitListStep3;