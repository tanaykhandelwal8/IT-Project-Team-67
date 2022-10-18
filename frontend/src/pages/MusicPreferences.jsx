import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import "../App.css";

function MusicPreferences(props) {
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

    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>Music Preferences</h1>
            </div>
            <div>
            {residentData.map((user, key) => (
                user._id === userID ?
                user.music.map((item, key) => ( 
                    <div className="gallery-column">
                    <div className="image-wrapper">
                        <img className="view-resident-picture" src={require('../assets/music-icon.png')} alt="" />
                        <p>Song</p>
                        <p>Artist</p>
                        <p>Genre</p>
                    </div>
                </div>
                ))
                : <div></div>
            ))}
        </div>
    </div>
    )
}

export default MusicPreferences;