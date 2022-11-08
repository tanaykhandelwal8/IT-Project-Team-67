import {Link} from "react-router-dom";
import "../App.css";
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function FavouriteMovies(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [moviesData, setMoviesData] = useState([{}])
    const getMoviesData = () => {
      axios.get("/get-movie-data")
      .then((res) => {setMoviesData(res.data)})
    }
    getMoviesData()

    const params = useParams();
    const userID = params.id;

    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>Movie Preferences</h1>
            </div>
            <div>
            {residentData.map((user, key) => (
                user._id === userID ?
                user.movies.map((item, key) => (
                    moviesData.map((movie, key) => (
                        item._id === movie._id ?
                        <div className="gallery-column">
                            <div className="image-wrapper">
                                <img className="preference-image" src={require('../assets/movie-icon.png')} alt="" />
                                <p>{movie.label}</p>
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

export default FavouriteMovies;