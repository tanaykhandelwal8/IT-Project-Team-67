import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ViewAllResidents() {
    
    const [backendData, setBackendData] = useState([{}])
    const getEvents = () => {
      axios.get("http://localhost:3001/get-resident-data")
      .then((res) => {setBackendData(res.data)})
    }
    getEvents()
    
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

            <div>
                {/* This displays the names */}
            {(typeof backendData === 'undefined') ? (
                    <p> loading</p>
                ): (
                    <div className='Font'>
                        {backendData.map((user, i) =>(
                            ((i+1) % 5 == 0) 
                            ?
                            <div key={i} className="row">
                                <div className="gallery-column">
                                    <div className="image-wrapper">
                                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                    <p>{user.firstName} {user.lastName} {JSON.stringify(user)}</p>
                                    <p>{user.location}</p>   
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="gallery-column">
                                <div className="image-wrapper">
                                <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                    <p>{user.firstName} {user.lastName} {JSON.stringify(user)}</p>
                                    <p>{user.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ViewAllResidents;