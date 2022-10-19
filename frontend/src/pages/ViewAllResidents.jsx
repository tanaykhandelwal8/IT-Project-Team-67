import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ViewAllResidents(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
    
    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()
    
    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>All Residents</h1>
            </div>
            <div>
                {/* This displays the names */}
            {(typeof residentData === 'undefined') ? (
                    <p> loading</p>
                ): (
                    <div className='Font'>
                        {residentData.map((user, i) =>(
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