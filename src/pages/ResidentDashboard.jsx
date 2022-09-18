import React from 'react';
import {Link} from 'react-router-dom';

function ResidentDashboard() {
    return (
        <div className="dashboard-wrapper">
        <br></br>
            <div className="centered-box">
                <h1>First Name Last Name</h1>
            </div>
        <br></br>
        <div className="row">
            <div className="column">
                <h2 className="centered-box">My Picture</h2>
                <img id="default-profile-pic" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                <div className="button-wrapper">
                    {/*<button className="dashboard-button">Upload Image</button>*/}
                    <Link to="*">Upload Image</Link>
                </div>
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
                <br />
                <span><input name="test" id="test" type="text" placeholder="E.g. 102" />
                </span>
                <br />
                <label htmlFor="test"><h4>Date of Birth</h4></label>
                <br />
                <span><input name="test" id="test" type="text" placeholder="E.g. 1/01/1970" />
                </span>
                <br />
                <label htmlFor="test"><h4>Biography</h4></label>
                <br />
                <span><input name="test" id="test" type="text" className="bio-input" placeholder="E.g. 1/01/1970" />
                </span>
            </div>
            <div className="column">
                <h2 className="centered-box">My Favourite Things</h2>
                <h3>Interests</h3>
                <h3>Hobbies</h3>
                <h3>Favourites</h3>
                <h3>Languages</h3>
            </div>
        </div></div>
    );
}

export default ResidentDashboard;