import React, { useEffect, useState } from "react";
import Fruit from "../components/Fruits";
import f from './_fruits.json'
const HelloRouteParams = ({match}) => {
  const [fruits, setFruits] = useState([]);
  const [fruitDef, setFruitDef] = useState({});

  useEffect(() => {
    /*
        in here is where you would go out to the internet with a fetch request
        and update the page with a useState hook
    */

        /** IIFE Function, Runs right away */
        (async ()=> {
          const response = await fetch ('/assets/fruit_definition.json')
          const data = await response.json();
          setFruitDef(data)
        })();

    const f = ["Apple", "Orange", "Peach", "Kiwi"];

    const filteredFruits = f.filter(
      (fruit) => fruit.indexOf(match.params.fruitFilter) > -1
    );
    setFruits(filteredFruits);
  }, [match.params.fruitFilter]);

  console.log(match.params.fruitFilter);

  return (
    <>
      <h1>The Value of anything is:{match.params.fruitFilter}</h1>
      {fruits.map((fruit) => (
        <h2>{fruit}</h2>
      ))}

      <h1> The fruit dictionary:</h1>
      <pre>
        {JSON.stringify(fruitDef,false, 2)}
      </pre>

      <Fruit name="Test" color="test">
        {Object.values(fruitDef).map(f=>{
          <Fruit key={f.name} name={f.name} color={f.color}/>
        })}
      </Fruit>
    </>
  );
};

export default HelloRouteParams;
