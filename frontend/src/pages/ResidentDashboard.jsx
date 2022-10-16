import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import axios from 'axios';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

import "../App.css";

function ResidentDashboard() {

    const [backendData, setBackendData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/get-resident-data")
      .then((res) => {setBackendData(res.data)})
    }
    getResidentData()

    const params = useParams();

    return (
        <div className='Font'>
        <div>
            <div className="dashboard-title">
                <h1 style={{display: "inline"}}>{backendData[0].firstName} {backendData[0].lastName}</h1>
                <Link to="../edit-resident-dashboard" style={{float: "right"}}>Edit Profile</Link>
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
                    <label><h3>Location</h3></label>
                    <p>{backendData[0].location}</p>
                    <label><h3>Date of Birth</h3></label>
                    <p>{backendData[0].dateOfBirth}</p>
                    <label>
                        <h3>About Me</h3>
                    </label>
                    <textarea value="Put read-only bio here." className="dashboard-textarea" style={{height: "160px"}} name="biography">Hi</textarea>
                </div>
            </div>
            <div className="right-column">
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Interests</h3>
                        {/* {interestData.slice(0,4).map((item, key) => ( */}
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
                                <p><Link to="../hobbies-interests" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
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
                                <p><Link to="../hobbies-interests" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
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
                                <p><Link to="*" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
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
                                <p><Link to="../favourite-animals" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
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
                                <p><Link to="../language-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
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