import { useState } from "react"
import Welcome from "./Welcome"

function InteractiveWelcome() {
    const [name, setName] = useState("")
    function handleChangesName(event) {
        setName(event.target.value)
    }
    return (
        <div>
        <input type="text" onChange={handleChangesName} value={name} placeholder="write your name"/> 
        <Welcome name={name}/>
        </div>
        
    )
}
export default InteractiveWelcome