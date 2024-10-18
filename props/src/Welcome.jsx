import { Age } from "./age";

export function Welcome({name}) {
    return (
        <div>
         <p>Welcome <strong>{name}</strong>!</p>
        <Age age={20}/>
        </div>
    )
}
