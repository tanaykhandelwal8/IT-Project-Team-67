import React from 'react';

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
                <img id="default-profile-pic" src="../gui/assets/profile-image-default.jpeg" alt="" />
                <button>Upload Image</button>
                <button>View all residents</button>
                <button>Visit Community Corner</button>
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