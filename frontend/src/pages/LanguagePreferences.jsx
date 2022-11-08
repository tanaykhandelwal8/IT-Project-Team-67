import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import "../App.css";
import {Link} from "react-router-dom";

function LanguagePreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [languageData, setLanguageData] = useState([{}])
    const getLanguageData = () => {
      axios.get("/get-language-data")
      .then((res) => {setLanguageData(res.data)})
    }
    getLanguageData()

    const params = useParams();
    const userID = params.id;
    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>Language Preferences</h1>
            </div>
            <div>
            {residentData.map((user, key) => (
                user._id === userID ?
                user.language.map((item, key) => (
                    languageData.map((language, key) => (
                        item._id === language._id ?
                        <div className="gallery-column">
                            <div className="image-wrapper">
                                <img className="preference-image" src={require('../assets/language-icon.png')} alt="" />
                                <p>{language.label}</p>
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

export default LanguagePreferences;