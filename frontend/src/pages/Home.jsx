import React,{useState, Component} from 'react';
import { Navigate } from "react-router-dom";
import { Link, useNavigate, useLocation} from "react-router-dom";
import axios from 'axios'
import "../App.css";

function Home() {

    const navigate = useNavigate();
    const location = useLocation();
    //const from = location.state?.from?.pathname || "/";

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isStaff, setIsStaff] = useState(false);
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
   
    const login = (e) => {
        e.preventDefault()
        //alert(loginUsername);
        //const {loginUsername, loginPassword} = this.state;
        axios.post('/login', {username: loginUsername, password: loginPassword})
            .then(function (response) {
                console.log(response)
                if (response.data.redirect == '/resident-dashboard') {
                    const userid = response.data.id
                    console.log(userid)
                    window.location = "/resident/"+userid+"/resident-dashboard"
                }
                if (response.data.redirect == '/staff-dashboard') {
                    const userid = response.data.id
                    window.location = "/staff/"+userid+"/staff-dashboard"
                } else if (response.data.redirect == '/login'){
                    window.location = "/login"
                }
            })
            .catch(function(error) {
                window.location = "/"
            })
    }


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