import React from 'react';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

function ResidentDashboard() {
    return (
        <div className="dashboard-wrapper">
            <div className="centered-box">
                <h1 style={{display: "inline-block"}}>First Name Last Name</h1>
            </div>
        <br></br>
        <div className="row">
            <div className="column">
                <br></br>
                <br></br>
                <div className="button-wrapper">
                    {/*<button className="dashboard-button">Upload Image</button>*/}
                    <UploadImage />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="button-wrapper">
                    {/*<button className="dashboard-button">View all residents</button>*/}
                    <Link to="../view-all-residents">View All Residents</Link>
                </div>
                <div className="button-wrapper">
                    {/*<button className="dashboard-button">Visit Community Corner</button>*/}
                    <Link to="../community-corner">Visit Community Corner</Link>
                </div>
            </div>
            <div className="column">
                <h2 className="centered-box">About Me</h2>
                <label htmlFor="test"><h4>Apartment Number</h4></label>
                <span><input style={{width: "20%", float: "right", marginRight: "4.6vw"}} name="test" id="test" type="text" placeholder="E.g. 102" />
                </span>
                <br></br>
                <br></br>
                <label htmlFor="test"><h4>Date of Birth</h4></label>
                <span><input style={{width: "40%", float: "right", marginRight: "4.6vw"}} name="test" id="test" type="text" placeholder="E.g. 1/01/1970" />
                </span>
                <br></br>
                <br></br>
                <label htmlFor="test"><h4>Biography</h4></label>
                <br></br>
                <br></br>
                <span><input name="test" id="test" type="text" className="bio-input" placeholder="" />
                </span>
            </div>
            <div className="column">
                <h2 className="centered-box">My Favourite Things</h2>
                <h3>Interests</h3>
                {/* forEach loop here for every activity/interest/hobby */}
                <div className="row">
                    <div className="dashboard-favourite-column">
                        <div className="dashboard-img-wrapper">
                        <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Activity</p>
                        </div>
                    </div>
                    <div className="dashboard-favourite-column">
                        <div className="dashboard-img-wrapper">
                        <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Activity</p>
                        </div>
                    </div>
                    <div className="dashboard-favourite-column">
                        <div className="dashboard-img-wrapper">
                        <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Activity</p>
                        </div>
                    </div>
                    <div className="dashboard-favourite-column">
                        <div className="dashboard-img-wrapper">
                        <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                        <p>Activity</p>
                        </div>
                    </div>
                </div>
                <h3>Hobbies</h3>
                <h3>Favourites</h3>
                <h3>Languages</h3>
            </div>
        </div>
    </div>
    );
}

export default ResidentDashboard;