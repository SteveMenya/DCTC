import { useState } from "react";

function HelloState() {
  const [fruit, setFruit] = useState("Apple");
  
  return <div>Hello State Works</div>;
}

export default HelloState;
