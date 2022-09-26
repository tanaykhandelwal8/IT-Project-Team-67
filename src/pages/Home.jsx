import React from 'react';
import "../App.css";

function Home() {
    return (
        <div>
        <div className="shadow-box" style={{"--r1":"130%","--r2":"71.5%"}}>
        </div>
        <div className="login-container">
            <div className="login-card">
            <div className="login-class">
                <h1>Welcome to Residencely</h1>
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