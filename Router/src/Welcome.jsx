// import { Age } from "./age";
import { Link} from "react-router-dom"

export function Welcome({name}) {
    return (
        <div>
         <p>Welcome <strong>{name}</strong>!</p>
        {/* <Age age={20}/> */}
        <Link to="/">return to home</Link>
        </div>
    )
}