import { useLoaderData } from "react-router-dom"

export default function FruitsPage() {

    const data = useLoaderData();
    const fruits = data.fruits;
    return (
        <>
            {fruits.map(fruit=>
                    <li>{fruit}</li>
                )}
        </>
    )
}