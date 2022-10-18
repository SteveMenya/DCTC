import { useLoaderData } from "react-router-dom"

export default function ShowPage() {
    const data = useLoaderData();
    const pokemon = data.pokemon;

    return (
      <h1>show page</h1>
    )
}