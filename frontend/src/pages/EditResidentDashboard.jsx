import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom';
import UploadImage from "../components/UploadImage";

import "../App.css";

function EditResidentDashboard(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
    
    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [musicData, setMusicData] = useState([{}])
    const getMusicData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-music-data")
      .then((res) => {setMusicData(res.data)})
    }
    getMusicData()

    const [hobbyData, setHobbyData] = useState([{}])
    const getHobbyData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-hobby-data")
      .then((res) => {setHobbyData(res.data)})
    }
    getHobbyData()

    const [interestData, setInterestData] = useState([{}])
    const getInterestData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-interest-data")
      .then((res) => {setInterestData(res.data)})
    }
    getInterestData()

    const [musicianData, setMusicianData] = useState([{}])
    const getMusicianData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-musician-data")
      .then((res) => {setMusicianData(res.data)})
    }
    getMusicianData()

    const [animalData, setAnimalData] = useState([{}])
    const getAnimalData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-animal-data")
      .then((res) => {setAnimalData(res.data)})
    }
    getAnimalData()

    const [foodData, setFoodData] = useState([{}])
    const getFoodData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-food-data")
      .then((res) => {setFoodData(res.data)})
    }
    getFoodData()

    const [languageData, setLanguageData] = useState([{}])
    const getLanguageData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-language-data")
      .then((res) => {setLanguageData(res.data)})
    }
    getLanguageData()

    const [movieData, setMovieData] = useState([{}])
    const getMovieData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-movie-data")
      .then((res) => {setMovieData(res.data)})
    }
    getMovieData()

    const params = useParams();
    const userID = params.id;

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have saved your changes.')
    }

    return (
        <div className='Font'>
        <div>
            <div className="dashboard-title">
                {residentData.map((user, key) => (
                    <div>
                    {(user._id === userID) ? <h1 style={{display: "inline"}}>Welcome {user.firstName} {user.lastName}</h1> : <div></div>}
                    {(user._id === userID) ? <Link to="../resident-dashboard" style={{float: "right"}}>View Profile</Link> : <div></div>}
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
                        (user._id === userID) ? <h1>{user.location}</h1> : <div></div>
                    ))}
                    <label><h3>Date of Birth</h3></label>
                    {residentData.map((user, key) => (
                        (user._id === userID) ? <h1>{user.dateOfBirth.slice(0,10)}</h1> : <div></div>
                    ))}
                    <form onSubmit={handleSubmit}>
                        <label>
                            <h3>About Me</h3>
                        </label>
                        <textarea className="dashboard-textarea" name="biography"></textarea>
                        <button type="submit">Save</button>
                    </form>
                    <br></br>
                    <div className="button-wrapper">
                        <Link to="../change-password">Change Password</Link>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Interests</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.interest.slice(0,4).map((item, key) => (
                                interestData.map((interest, key) => (
                                    item._id === interest._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{interest.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-interest-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Hobbies</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.hobby.slice(0,4).map((item, key) => ( 
                                hobbyData.map((hobby, key) => (
                                    item._id === hobby._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{hobby.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-hobby-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Songs</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.music.slice(0,4).map((item, key) => (
                                musicData.map((song, key) => (
                                    item._id === song._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{song.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-music-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Musician</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.musician.slice(0,4).map((item, key) => ( 
                                musicianData.map((musician, key) => (
                                    item._id === musician._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{musician.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-musician-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Films</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.movies.slice(0,3).map((item, key) => ( 
                                movieData.map((movie, key) => (
                                    item._id === movie._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{movie.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-movie-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Foods</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.food.slice(0,4).map((item, key) => ( 
                                foodData.map((food, key) => (
                                    item._id === food._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{food.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-food-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Favourite Animals</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.animals.slice(0,4).map((item, key) => ( 
                                animalData.map((animal, key) => (
                                    item._id === animal._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{animal.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-animal-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-column">
                    <div className="gallery-card">
                        <h3>Languages Spoken</h3>
                        {residentData.map((user, key) => (
                            user._id === userID ?
                            user.language.slice(0,4).map((item, key) => ( 
                                languageData.map((language, key) => (
                                    item._id === language._id ?
                                    <div className="dashboard-favourite-column">
                                        <div className="dashboard-img-wrapper">
                                            <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                            <p>{language.label}</p>
                                        </div>
                                    </div>
                                    : <div></div>
                                ))
                            ))
                            : <div></div>
                        ))}
                        <div className="dashboard-favourite-column">
                            <div className="dashboard-img-wrapper">
                            <img className="gallery-profile-picture" src={require('../assets/plus.png')} alt="" />
                            <p><Link to="../edit-language-preferences" style={{padding: "0", backgroundColor: "lightsteelblue", color: "blue",}}>Add More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default EditResidentDashboard;