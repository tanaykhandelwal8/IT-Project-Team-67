import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

import "../App.css";

function ChangePassword(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
    
    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const params = useParams();
    const userID = params.id;

    return (
        <div className='Font'>
        <div>
            <div className="centered-box">
                <h1>Change Password</h1>
            </div>
            <div>
            <div className="login-container" style={{marginTop: "0"}}>
                <form >
                    <p>Current Password</p>
                    <input className="credential-box" type="text" placeholder="current password" />
                    <p>New Password</p>
                    <input className="credential-box" type="password" placeholder="password" />
                    <p>Confirm New Password</p>
                    <input className="credential-box" type="password" placeholder="password" />
                    <br></br>
                    <button style={{height: "3vw"}}>Change Password</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ChangePassword;