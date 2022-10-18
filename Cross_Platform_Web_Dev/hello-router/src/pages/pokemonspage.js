import { useLoaderData } from "react-router-dom"

export default function PokemonsPage() {
    const data = useLoaderData();
    const pokemon = data.pokemon;
    return(
      <h1>PK PAGE</h1>
    )
}