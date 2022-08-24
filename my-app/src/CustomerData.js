import { useState } from "react";

const CustomerData = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("")

    return (
        <div>
            <form>
                <label htmlFor="username">
                   username
                   <input
                       id="username"
                       value={username}
                       placeholder="username"
                       onChange={(e) => setUserName(e.target.value)}
                   />
                   
                </label>

                <label htmlFor="password">
                    password
                    <input
                       id="password"
                       value={password}
                       placeholder="password"
                       onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CustomerData;