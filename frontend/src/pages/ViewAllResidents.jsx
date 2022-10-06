import React, {useEffect, useState} from 'react';

function ViewAllResidents() {


    return (
        <div>
        <div className="centered-box">
            <h1 className='Font'>All Residents</h1>
        </div>
            {/* forEach loop here for every resident*/}
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default ViewAllResidents;