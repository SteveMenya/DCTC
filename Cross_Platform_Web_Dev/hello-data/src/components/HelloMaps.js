function HelloMaps() {

    const myJSXValue = <h2>Wow this works</h2>;
    const myOtherJSXValue= <div><h2>Neat!</h2><p>JSX Hurts my brain!</p></div>
    
    const stuff =[<p>Hi</p>, <p>Hello</p>, <h3>Hi Again</h3>]
    const fruits = ['Apple', 'Orange', 'Peach', 'Strawberry']
    return (
        <div>
            {myJSXValue}
            {myOtherJSXValue}
            {stuff}

            <ul>
                {fruits.map(fruit=>
                    <li>{fruit}</li>
                )}
            </ul>
        </div>
    )
}

export default HelloMaps