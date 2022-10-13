import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

import "../App.css";

function StaffDashboard() {

    const [staffData, setStaffData] = useState([{}])
    const getStaffData = () => {
      axios.get("http://localhost:3001/get-staff-data")
      .then((res) => {setStaffData(res.data)})
    }
    getStaffData()

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    return (
        <div className='Font'>
        <div>
            <div className="dashboard-title">
                <h1>Welcome {staffData[0].firstName} {staffData[0].firstName} </h1>
            </div>
        <div className="row">
            <div className="left-column">
                <div className="gallery-card">
                    <UploadImage />
                    <div className="button-wrapper">
                        <Link to="../add-staff">Add New Staff</Link>
                    </div>
                    <br></br>
                    <div className="button-wrapper">
                        <Link to="../add-resident">Add New Resident</Link>
                    </div>
                </div>
                <div className="gallery-card">
                    <div className="button-wrapper">
                        <Link to="../view-all-residents">View All Residents</Link>
                    </div>
                    <br></br>
                    <div className="button-wrapper">
                        <Link to="../community-corner">Visit Community Corner</Link>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="gallery-card">
                    <h2 className="centered-element">Residents List</h2>
                    <div>
                    {(typeof residentData === 'undefined') ? (
                            <p> loading</p>
                        ): (
                        <div className='Font'>
                            {residentData.slice(0,10).map((user, key) => (
                                <div className="gallery-column">
                                    <div className="image-wrapper">
                                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                    <p>{user.firstName} {user.lastName}</p>
                                    <p>{user.location}</p>   
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default StaffDashboard;