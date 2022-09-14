import React from 'react';

function ResidentDashboard() {
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        <link rel="stylesheet" href="../gui/styles/styles.css" />
        <h1 style={{"float": "right"}}>{'{'}First Name{'}'} {'{'}Last Name{'}'}</h1>
        <div className="row">
            <div className="column">
            <h2>My Picture</h2>
            <img id="default-profile-pic" src="../gui/assets/profile-image-default.jpeg" alt="" />
            <button>Upload Image</button>
            <button>View all residents</button>
            <button>Visit Community Corner</button>
            </div>
            <div className="column">
            <h2>About Me</h2>
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
            <h2>My Favourite Things</h2>
            <h3>Interests</h3>
            <h3>Hobbies</h3>
            <h3>Favourites</h3>
            <h3>Languages</h3>
            </div>
            <br />
            <br />
            <br />
            <br />
            <p style={{"float":"right"}}>Signed in as Xxxx Xxxxxx</p>
        </div></div>
    );
}

export default ResidentDashboard;