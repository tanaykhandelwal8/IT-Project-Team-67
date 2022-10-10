import React, { useEffect, useState } from "react";

import "../App.css"

function AddUser(props) {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const register = () => {}
    const login = () => {}
    const getUser = () => {}
    return (
        <div className="addUser">
            <div>
                <h1>Register</h1>
                <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                <input placeholder="password" onchange={e => setRegisterPassword(e.target.value)}/>
                <button onClick={register}>Submit</button>
            </div>

            <div>
                <h1>Login</h1>
                <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
                <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
                <button onClick={login}>Submit</button>
            </div>

            <div>
                <h1>Get User</h1>
                <button onClick={getUser}>Submit</button>
            </div>
        </div>
    );
}

export default AddUser;