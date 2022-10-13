import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ViewAllResidents() {
    
    const [backendData, setBackendData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/get-resident-data")
      .then((res) => {setBackendData(res.data)})
    }
    getResidentData()
    
    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>All Residents</h1>
            </div>
            <div>
                {/* This displays the names */}
            {(typeof backendData === 'undefined') ? (
                    <p> loading</p>
                ): (
                    <div className='Font'>
                        {backendData.map((user, i) =>(
                            <div className="gallery-column">
                                <div className="image-wrapper">
                                <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>{user.firstName} {user.lastName}</p>
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