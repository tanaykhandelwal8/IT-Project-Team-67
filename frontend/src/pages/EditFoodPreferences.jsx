import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import "../App.css";

function EditFoodPreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const params = useParams();
    const userID = params.id;

    const [selectedData, setSelectedData] = useState([]);

    const [foodData, setFoodData] = useState([{}])
    const getFoodData = () => {
        axios.get("http://localhost:3001/get-food-data")
        .then((res) => {setFoodData(res.data)})
    }
    getFoodData()

    const handleSubmit = () => {
        axios({
            method:"post",
            data: {objects: [userID, selectedData]},
            withCredentials: true,
            url: "http://localhost:3001/update-music-preferences"
        }).then((res) => console.log(res))
    }

    return (
        <div>
            <div className="dashboard-title">
                <h1 className='Font' style={{display: "inline"}}>Edit Food Preferences</h1>
                <Link to="../favourite-food" style={{float: "right"}}>View Preferences</Link>
            </div>
            <div>
                <h1>
                    Select your favourite foods!
                </h1>
                <MultiSelect
                    options={foodData}
                    value={selectedData}
                    onChange={setSelectedData}
                    labelledBy={"Select"}
                />
            </div>
            <br></br>
            <button style={{height: "3vw"}} type="submit" onClick={handleSubmit}>Save</button>

        </div>
    )
}

export default EditFoodPreferences;