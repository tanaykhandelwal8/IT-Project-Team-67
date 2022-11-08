import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import "../App.css";
import {Link} from "react-router-dom";

function FavouriteMusicians(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [musicianData, setMusicianData] = useState([{}])
    const getMusicianData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/get-musician-data")
      .then((res) => {setMusicianData(res.data)})
    }
    getMusicianData()

    const params = useParams();
    const userID = params.id;

    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>Favourite Musicians</h1>
            </div>
            <div>
            {residentData.map((user, key) => (
                user._id === userID ?
                user.musician.map((item, key) => (
                    musicianData.map((musician, key) => (
                        item._id === musician._id ?
                        <div className="gallery-column">
                            <div className="image-wrapper">
                                <img className="preference-image" src={require('../assets/music-icon.png')} alt="" />
                                <p>{musician.label}</p>
                                <p>{musician.artist}</p>
                                <p>{musician.genre}</p>
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

export default FavouriteMusicians;