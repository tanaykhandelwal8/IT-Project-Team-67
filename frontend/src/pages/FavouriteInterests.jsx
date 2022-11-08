import {Link} from "react-router-dom";
import "../App.css";
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function FavouriteInterests(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [interestData, setInterestData] = useState([{}])
    const getInterestData = () => {
      axios.get("/get-interest-data")
      .then((res) => {setInterestData(res.data)})
    }
    getInterestData()

    const params = useParams();
    const userID = params.id;
    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>Interests</h1>
            </div>
            <div>
            {residentData.map((user, key) => (
                user._id === userID ?
                user.interest.map((item, key) => (
                    interestData.map((interest, key) => (
                        item._id === interest._id ?
                        <div className="gallery-column">
                            <div className="image-wrapper">
                                <img className="preference-image" src={require('../assets/hobby-icon.png')} alt="" />
                                <p>{interest.label}</p>
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

export default FavouriteInterests;