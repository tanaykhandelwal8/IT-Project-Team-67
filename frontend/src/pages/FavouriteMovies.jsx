import React from 'react';
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
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [moviesData, setMoviesData] = useState([{}])
    const getMoviesData = () => {
      axios.get("http://localhost:3001/get-hobby-data")
      .then((res) => {setMoviesData(res.data)})
    }
    getMoviesData()
    return (
        <div>
        <div className="centered-box">
            <h1 className='Font'>Favourite Movies</h1>
        </div>
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>

                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/movie-icon.png')} alt="" />
                        <p>Movie</p>
                    </div>
                </div>
            </div>
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