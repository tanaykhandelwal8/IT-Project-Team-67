import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";

function HobbiesInterests(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
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