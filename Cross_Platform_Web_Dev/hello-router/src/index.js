import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FruitsPage from "./pages/fruitspage";
import AboutPage from "./pages/aboutpage";
import HomePage from "./pages/homepage";
import Root from "./roots";
import PokemonsPage from "./pages/pokemonspage";
import ShowPage from "./pages/showpage";

// async function fruitsLoader() {
//   return { fruits: ["Apple", "Orange", "Peach"] };
// }

async function fruitsLoader() {
  const fruits = ['apple', 'orange', 'peach']
  const dataObject = {}
  dataObject.fruits = fruits;
  return dataObject;
}

async function pokemonsLoader() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const dataObject = await response.json();
  const pokemon = dataObject.results;
  return{pokemon:pokemon}
}

async function loadSinglePokemon({params}) {
  const pokemonId = params.id
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId)
  const dataObject = await response.json();
  return {pokemon:dataObject}
}
// const router = createBrowserRouter([
//   {path:'/', element: <h1>Hello World!</h1>},
//   // {path:'/about', element: <h1>Hello World!</h1>}
// ])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [{ path: "about", element: <h1>Hello About</h1> }],
//   },
//   { path: "/about", element: <h1>Hello About!</h1> },
// ]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       { path: "", element: <HomePage /> },
//       { path: "about", element: <AboutPage /> },
//     ],
//   },
// ]);

//other option
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       { path: "", element: <HomePage /> },
//       { path: "about", element: <AboutPage /> },
//     ],
    
//   },
//   { path: "fruits", element: <FruitsPage /> , loader:fruitsLoader}
// ]);


// all children
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "fruits", element: <FruitsPage /> , loader:fruitsLoader},
      { path: "pokemon", element: <PokemonsPage></PokemonsPage>, loader:pokemonsLoader },
      { path: "show/id", element: <ShowPage></ShowPage>, loader:loadSinglePokemon },

    ],
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
