import React from 'react';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

import "../App.css";

function ResidentDashboard() {

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have saved your changes.')
    }

    return (
        <div className='Font'>
        <div>
            <div className="dashboard-title">
                <h1>John Smith</h1>
            </div>
        <div className="row">
            <div className="left-column">
                <div className="gallery-card">
                    <UploadImage />
                    <div className="button-wrapper">
                        <Link to="../view-all-residents">View All Residents</Link>
                    </div>
                    <br></br>
                    <div className="button-wrapper">
                        <Link to="../community-corner">Visit Community Corner</Link>
                    </div>
                </div>
                <div className="gallery-card">
                    <label><h3>Address</h3></label>
                    <p>42 Wallaby Way, Sydney</p>
                    <label><h3>Date of Birth</h3></label>
                    <p>1/01/1970</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <h3>About Me</h3>
                        </label>
                        <textarea className="dashboard-textarea" name="biography"></textarea>
                        <button style={{height: "3vw"}} type="submit">Save</button>
                    </form>
                </div>
            </div>
            <div className="right-column">
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Interests</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Interest</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Interest</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Interest</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Interest</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="*" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Hobbies</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Hobby</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Hobby</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Hobby</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                <p>Hobby</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="*" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Songs</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/music-icon.png')} alt="" />
                                <p>Song</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/music-icon.png')} alt="" />
                                <p>Song</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/music-icon.png')} alt="" />
                                <p>Song</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/music-icon.png')} alt="" />
                                <p>Song</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="../music-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Artists</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/music-icon.png')} alt="" />
                                <p>Artist</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/music-icon.png')} alt="" />
                                <p>Artist</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/music-icon.png')} alt="" />
                                <p>Artist</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="*" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Films</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/movie-icon.png')} alt="" />
                                <p>Film</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/movie-icon.png')} alt="" />
                                <p>Film</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/movie-icon.png')} alt="" />
                                <p>Film</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/movie-icon.png')} alt="" />
                                <p>Film</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="../favourite-movies" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Food</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/food-icon.png')} alt="" />
                                <p>Food</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/food-icon.png')} alt="" />
                                <p>Food</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/food-icon.png')} alt="" />
                                <p>Food</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/food-icon.png')} alt="" />
                                <p>Food</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="../favourite-food" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Animals</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/animal-icon.png')} alt="" />
                                <p>Animal</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="../favourite-animals" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Languages Spoken</h3>
                        {/* forEach loop here for every activity/interest/hobby */}
                        <div className="row">
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/language-icon.png')} alt="" />
                                <p>Language</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/language-icon.png')} alt="" />
                                <p>Language</p>
                                </div>
                            </div>
                            <div className="dashboard-favourite-column">
                                <div className="dashboard-img-wrapper">
                                <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                                <p><Link to="../language-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                                </div>
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

export default ResidentDashboard;