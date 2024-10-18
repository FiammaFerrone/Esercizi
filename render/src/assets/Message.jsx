import { Age } from "./Age";

export function Message({age}) {
   return age > 18 ? <Age age={age}/> : <p>You are very young!</p>
}
