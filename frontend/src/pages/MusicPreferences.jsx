import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import "../App.css";
import {Link} from "react-router-dom";

function MusicPreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [musicData, setMusicData] = useState([{}])
    const getMusicData = () => {
      axios.get("http://localhost:3001/get-music-data")
      .then((res) => {setMusicData(res.data)})
    }
    getMusicData()

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
                    musicData.map((song, key) => (
                        item._id === song._id ?
                        <div className="gallery-column">
                            <div className="image-wrapper">
                                <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                <p>{song.label}</p>
                                <p>{song.artist}</p>
                                <p>{song.genre}</p>
                            </div>
                        </div>
                        : <div></div>
                    ))
                ))
                : <div></div>
            ))}
        </div>
        <div className='Font'>
            {/* Show staff dashboard button if logged in as staff */}
            {props.role == "staff" &&
                <Link to="../staff-dashboard">Staff Dashboard</Link>
            }
            {/* Show resident dashboard button if logged in as resident */}
            {props.role == "resident" &&
                <Link to="../resident-dashboard">Resident Dashboard</Link>
            }
        </div>
    </div>
    )
}

export default MusicPreferences;