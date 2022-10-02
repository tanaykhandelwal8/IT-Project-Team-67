import React,{useState} from 'react';
import { Navigate } from "react-router-dom";

import "../App.css";

function Home() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isStaff, setIsStaff] = useState(false);

    //Placeholder backend
    const database = [
        {
            username: "user1",
            password: "pass1",
            role: "resident"
        },
        {
            username: "user2",
            password: "pass2",
            role: "staff"
        },
        {
            username: "user3",
            password: "pass3",
            role: "resident"
        }
    ];
    
    //Error outputs if username/password is incorrect
    const errors = {
        uname: "Invalid username or password.",
        pass: "Invalid username or password."
    };

    const errorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
      
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            if (userData.role === "staff") {
                setIsStaff(true);
            }
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    
    return (
        <div>
            <div className="shadow-box" style={{"--r1":"130%","--r2":"71.5%"}}>
            </div>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-class">
                        <h1>Welcome to Residencely</h1>
                    </div>
                    {isSubmitted ? isStaff ? <div><Navigate replace to="/staff-dashboard" /></div>: <div><Navigate replace to="/resident-dashboard" /></div> : <div></div>}
                    <form onSubmit={handleSubmit}>
                        <div className="login-credentials">
                            <p>Username</p>
                            <input className="credential-box" type="text" name="uname" required />
                            {errorMessage("uname")}
                            <p>Password</p>
                            <input className="credential-box" type="password" name="pass" required />
                            {errorMessage("pass")}
                            <br></br>
                            <button style={{height: "3vw"}}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;