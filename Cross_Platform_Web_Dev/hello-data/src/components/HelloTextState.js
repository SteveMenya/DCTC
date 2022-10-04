import { useState } from "react";

function HelloTextState() {
  let theText = "This is my text";
  const [stateText, updateStateText] = useState("this is my other text");

  function handleChange(e) {
    const value = e.target.value;
    updateStateText(value);
  }

  return (
    <div>
      <h1>{theText}</h1>
      <input value={theText} />
      <h1>{stateText}</h1>
      <input value={stateText} onChange={handleChange} />
    </div>
  );
}

export default HelloTextState;
