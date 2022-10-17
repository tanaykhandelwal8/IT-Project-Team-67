import React from 'react';

import "../App.css";

function FavouriteMovies(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
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
    </div>
    )
}

export default FavouriteMovies;