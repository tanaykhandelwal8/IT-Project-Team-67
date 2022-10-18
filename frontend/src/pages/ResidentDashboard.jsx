import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

import "../App.css";

function ResidentDashboard(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
    
    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const params = useParams();
    const userID = params.id;

    const userBiography = residentData.map((user, key) => (
        (user._id === userID) ? user.biography : <div></div>
    ))

    return (
        <div className='Font'>
        <div>
            <div className="dashboard-title">
                {residentData.map((user, key) => (
                    <div>
                    {(user._id === userID) ? <h1 style={{display: "inline"}}>Welcome {user.firstName} {user.lastName}</h1> : <div></div>}
                    {(user._id === userID) ? <Link to="../edit-resident-dashboard" style={{float: "right"}}>Edit Profile</Link> : <div></div>}
                    </div>
                ))}
            </div>
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
                    {residentData.map((user, key) => (
                        (user._id == userID) ? <h1>{user.location}</h1> : <div></div>
                    ))}
                    <label><h3>Date of Birth</h3></label>
                    {residentData.map((user, key) => (
                        (user._id == userID) ? <h1>{user.dateOfBirth.slice(0,10)}</h1> : <div></div>
                    ))}
                    <label>
                        <h3>About Me</h3>
                    </label>
                    <textarea value={userBiography} className="dashboard-textarea" style={{height: "160px"}} name="biography">
                    </textarea>
                </div>
            </div>
            <div className="right-column">
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Interests</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.interest.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../hobbies-interests" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Hobbies</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.hobby.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../hobbies-interests" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Favourite Songs</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.music.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../music-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Favourite Musician</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.musician.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../music-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Favourite Films</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.movies.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../favourite-movies" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Favourite Foods</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.food.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../favourite-food" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Favourite Animals</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.animals.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../favourite-animals" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card" style={{height: "16vw"}}>
                        <h3>Languages Spoken</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.language.slice(0,4).map((item, key) => ( 
                                <div className="dashboard-favourite-column">
                                    <div className="dashboard-img-wrapper">
                                    <img className="gallery-profile-picture" src={require('../assets/activity-icon.png')} alt="" />
                                    <p>{item}</p>
                                    </div>
                                </div>
                            ))
                            : <div></div>
                        ))}
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
    );
}

export default ResidentDashboard;