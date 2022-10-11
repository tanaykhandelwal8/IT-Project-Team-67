import React,{useState} from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios'
import "../App.css";

function Home() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isStaff, setIsStaff] = useState(false);
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const login = () => {
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
        }).then((res) => console.log(res));
    };


    return (
        <div className='Font'>
        <div>
            <div className="shadow-box" style={{"--r1":"130%","--r2":"71.5%"}}>
            </div>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-class">
                        <h1>Welcome to Residencely</h1>
                    </div>
                    {isSubmitted ? <div><Navigate replace to="/resident-dashboard" /></div> : <div></div>}
                    <form >
                        <div className="login-credentials">
                            <p>Username</p>
                            <input className="credential-box" type="text" placeholder="username" onChange={(e) => setLoginUsername(e.target.value)}  />
                            <p>Password</p>
                            <input className="credential-box" type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)}/>
                            <br></br>
                            <button style={{height: "3vw"}} onClick={login}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;