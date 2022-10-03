import { useState } from "react";

function HelloComponent() {
  const greeting = "Hello!";
  const myState = useState(0);
  const myStateValue = myState[0];
  const setMyStateValue = myState[1];
  let numTimes = 0;

  numTimes++;

  return (
    <div>
      <h1>You clicked {myStateValue}</h1>
      <button onClick={() => setMyStateValue(myStateValue + 1)}>
        My Button
      </button>
    </div>
  );
}

export default HelloComponent;
