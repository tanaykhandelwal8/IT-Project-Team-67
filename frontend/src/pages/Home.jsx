import React,{useState, Component, useRef, useEffect} from 'react';
import { Navigate } from "react-router-dom";
import { Link, useNavigate, useLocation} from "react-router-dom";
import axios from 'axios'
import "../App.css";
import logo from "../assets/logoFlat.png"

function Home(props) {
    const errRef = useRef();
    const userRef = useRef();

    const [errMsg, setErrMsg] = useState("");
    const [errorOccured, setErrorOccured] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isStaff, setIsStaff] = useState(false);
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    /*
    useEffect(() => {
        userRef.current.focus();
    }, [])
    */
    useEffect(()=>{
       setErrMsg('');
    },[loginUsername, loginPassword])
    /* Navbar does not need to be displayed on this page */
    props.funcNav(false)
    
    const login = (e) => {
        e.preventDefault()
        //alert(loginUsername);
        //const {loginUsername, loginPassword} = this.state;
        axios.post('https://residencely-frontend.herokuapp.com/login', {username: loginUsername, password: loginPassword})
            .then(function (response) {
                console.log(response)
                if (response.data.redirect === '/resident-dashboard') {
                    const userid = response.data.id
                    console.log(userid)
                    window.location = "/resident/"+userid+"/resident-dashboard"
                }
                if (response.data.redirect === '/staff-dashboard') {
                    const userid = response.data.id
                    window.location = "/staff/"+userid+"/staff-dashboard"
                } else if (response.data.redirect === '/fail'){
                    setErrorOccured(true)
                    return <div>Incorrect UserName or Password</div>                    
                }
            })
            .catch(function(error) {
                window.location = "/"
            })
    }
    if (errorOccured) return <div>Incorrect UserName or Password</div>
    /*
    <section>
                <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p>
   </section>
    */        
    return (
        
        <div className='Font'>
            <div style={{"background-color": "whitesmoke"}}>
                <img src={logo} className="LoginLogo"></img>
            </div>
        <div>
            <div className="shadow-box" style={{"--r1":"130%","--r2":"71.5%"}}>
            </div>
            <div className='login-container'>
                
                <div className="login-card">
                <div className='login-welcome'>Welcome to Residencely</div>
                    <div className='login-credentials'>
                        
                    {isSubmitted ? <div><Navigate replace to="/resident-dashboard" /></div> : <div></div>}
                    <form >
                        <div>
                            <p>Username</p>
                            <input className="credential-box" type="text" placeholder="username" onChange={(e) => setLoginUsername(e.target.value)}  />
                            <p>Password</p>
                            <input className="credential-box" type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)}/>
                            <br></br>
                            <button onClick={login}>Login</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;