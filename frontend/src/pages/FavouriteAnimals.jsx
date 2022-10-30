import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import "../App.css";
import {Link} from "react-router-dom";

function FavouriteAnimals(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const [animalData, setAnimalData] = useState([{}])
    const getAnimalData = () => {
      axios.get("http://localhost:3001/get-animal-data")
      .then((res) => {setAnimalData(res.data)})
    }
    getAnimalData()

    const params = useParams();
    const userID = params.id;
    return (
        <div>
            <div className="centered-box">
                <h1 className='Font'>Favourite Animals</h1>
            </div>
            <div>
            {residentData.map((user, key) => (
                user._id === userID ?
                user.animals.map((item, key) => (
                    animalData.map((animal, key) => (
                        item._id === animal._id ?
                        <div className="gallery-column">
                            <div className="image-wrapper">
                                <img className="preference-image" src={require('../assets/animal-icon.png')} alt="" />
                                <p>{animal.label}</p>
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

export default FavouriteAnimals;