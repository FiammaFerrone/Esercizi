import { useEffect, useState } from "react"

function Counter({counter = 0,addValue = 1}) {
    const [count, setCount] = useState(counter)

    function increment() {
        setCount(count + addValue)
    };
    
    useEffect(() => {
        console.log(`My value is ${count}`);
    },[count]);
    
    return (
        <div>
            <button onClick={increment}>Cliccami</button>
            <h2>Current Value is {count}</h2>
        </div>
    )
};

export default Counter