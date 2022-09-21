import React from 'react';

function ViewAllResidents() {
    return (
        <div>
        <div className="centered-box">
            <h1 className='Font'>All Residents</h1>
        </div>
        <div className="row">
            <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
            <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
            <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
            <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
        </div>
        <div className="row">
        <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
            <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
            <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
            <div className="gallery-column">
                <div className="image-wrapper">
                    <img className="gallery-profile-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                    <p>Name</p>
                    <p>Apartment Number</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ViewAllResidents;