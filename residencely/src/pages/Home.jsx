import React from 'react';
import "../App.css";

function Home() {
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        <div className="shadow-box" style={{"--r1":"130%","--r2":"71.5%"}}>
            <div className="header">
            <img id="logo" src="/assets/Residencely-1.png" alt="" />
            </div>
        </div>
        <div className="login-container">
            <div className="login-card">
            <div className="login-class">
                <h1>Residents</h1>
                <h1>Staff</h1>
            </div>
            <div className="login-credentials">
                <p>Username</p>
                <div className="credential-box">
                </div>
                <p>Password</p>
                <div className="credential-box">
                </div>
                <button>
                <p>Login</p>
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Home;