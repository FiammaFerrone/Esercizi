import { useEffect, useState } from "react"

function Counter({counter, addValue }) {
    const [count, setCount] = useState(counter)

    function increment() {
        setCount((c) => c + addValue)
    };

    console.log(count);
    
    
    useEffect(() => {
        console.log(`My value is ${count}`);
    },[]);
    
    return (
        <div>
            <button onClick={increment}>Cliccami</button>
            <h2>Current Value is {count}</h2>
        </div>
    )
};

export default Counter