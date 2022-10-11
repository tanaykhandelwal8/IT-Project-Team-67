import React from 'react';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

import "../App.css";

function StaffDashboard() {

    return (
        <div className='Font'>
        <div>
            <div className="dashboard-title">
                <h1>Welcome Jane Doe</h1>
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
                    <label><h3>Address</h3></label>
                    <p>42 Wallaby Way, Sydney</p>
                    <label><h3>Date of Birth</h3></label>
                    <p>1/01/1970</p>
                </div>
            </div>
            <div className="right-column">
                <div className="gallery-card">
                    <h2 className="centered-element">Residents List</h2>
                    {/* forEach loop here for every activity/interest/hobby */}
                    <div className="row">
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                        <div className="gallery-column">
                            <div className="image-wrapper">
                            <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>Name</p>
                                <p>Address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default StaffDashboard;