import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import "../App.css";

function EditHobbyPreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const params = useParams();
    const userID = params.id;

    const [selectedData, setSelectedData] = useState([]);

    const [hobbyData, setHobbyData] = useState([{}])
    const getHobbyData = () => {
        axios.get("https://residencely-frontend.herokuapp.com/get-hobby-data")
        .then((res) => {setHobbyData(res.data)})
    }
    getHobbyData()

    const handleSubmit = () => {
        axios({
            method:"post",
            data: {objects: [userID, selectedData]},
            withCredentials: true,
            url: "https://residencely-frontend.herokuapp.com/update-hobby-preferences"
        }).then((res) => console.log(res))
    }

    return (
        <div>
            <div className="dashboard-title">
                <h1 className='Font' style={{display: "inline"}}>Edit Hobby Preferences</h1>
                <Link to="../favourite-hobbies" style={{float: "right"}}>View Preferences</Link>
            </div>
            <div>
                <h1>
                    Select your favourite hobbies!
                </h1>
                <MultiSelect
                    options={hobbyData}
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

export default EditHobbyPreferences;