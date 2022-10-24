import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function HobbiesInterests(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [hobbiesData, setHobbiesData] = useState([{}])
    const getHobbiesData = () => {
      axios.get("http://localhost:3001/get-hobbies-data")
      .then((res) => {setHobbiesData(res.data)})
    }
    getHobbiesData()

    const params = useParams();
    const userID = params.id;
    return (
        <div>
        <div className="centered-box">
            <h1 className='Font'>Hobbies/Interests</h1>
        </div>
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>

                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Hobby</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Font'>
            {/* Show staff dashboard button if logged in as staff */}
            {props.role == "staff" &&
                <Link to="../staff-dashboard">Staff Dashboard</Link>
            }
            {/* Show resident dashboard button if logged in as resident */}
            {props.role == "resident" &&
                <Link to="../resident-dashboard">Resident Dashboard</Link>
            }
        </div>
    </div>
    )
}

export default HobbiesInterests;