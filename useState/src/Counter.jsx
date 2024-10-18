import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({initialValue, changeValue}) {
    const [count, setCount] = useState(initialValue);
    function handleCounterIncr() {
        setCount(initialValue + 1);
    }
    function handleCounterDim() {
        setCount(count - changeValue);
    }
    function reset() {
        setCount(initialValue);
    }

    return (
        <div>
            <button onClick={handleCounterIncr}>Aumento</button>
            <button onClick={handleCounterDim}>Diminuisco</button>
            <button onClick={reset}>reset</button>
            <CounterDisplay counterValu={count}/>
        </div>
    )

}
export default Counter