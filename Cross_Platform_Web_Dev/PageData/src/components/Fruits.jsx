import './Fruits.css'
export default function Fruit({name, color}) {

    return<>
    <header className='header'>
        <h2>
            {name}
        </h2>
        <p>{color}</p>
    </header>
    </>

}