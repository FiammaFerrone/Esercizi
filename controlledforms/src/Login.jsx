import { useState } from "react"

function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return (
        <form>
            <input type="username" />
            <input type="password" />
            <input type="checkbox" />
            <button>login</button>
        </form>
    )
}
export default Login