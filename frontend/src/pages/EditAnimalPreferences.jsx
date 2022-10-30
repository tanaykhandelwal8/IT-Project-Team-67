import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import "../App.css";

function EditAnimalPreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const params = useParams();
    const userID = params.id;

    const [selectedData, setSelectedData] = useState([]);

    const [animalData, setAnimalData] = useState([{}])
    const getAnimalData = () => {
        axios.get("http://localhost:3001/get-animal-data")
        .then((res) => {setAnimalData(res.data)})
    }
    getAnimalData()

    const handleSubmit = () => {
        axios({
            method:"post",
            data: {objects: [userID, selectedData]},
            withCredentials: true,
            url: "http://localhost:3001/update-animal-preferences"
        }).then((res) => console.log(res))
    }

    return (
        <div>
            <div className="dashboard-title">
                <h1 className='Font' style={{display: "inline"}}>Edit Animal Preferences</h1>
                <Link to="../favourite-animals" style={{float: "right"}}>View Preferences</Link>
            </div>
            <div>
                <h1>
                    Select your favourite animals!
                </h1>
                <MultiSelect
                    options={animalData}
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

export default EditAnimalPreferences;