import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import "../App.css";

function EditLanguagePreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const params = useParams();
    const userID = params.id;

    const [selectedData, setSelectedData] = useState([]);

    const [languageData, setLanguageData] = useState([{}])
    const getLanguageData = () => {
        axios.get("http://localhost:3001/get-language-data")
        .then((res) => {setLanguageData(res.data)})
    }
    getLanguageData()

    const handleSubmit = () => {
        axios({
            method:"post",
            data: {objects: [userID, selectedData]},
            withCredentials: true,
            url: "http://localhost:3001/update-language-preferences"
        }).then((res) => console.log(res))
    }

    return (
        <div>
            <div className="dashboard-title">
                <h1 className='Font' style={{display: "inline"}}>Edit Language Preferences</h1>
                <Link to="../favourite-languages" style={{float: "right"}}>View Preferences</Link>
            </div>
            <div>
                <h1>
                    Select the languages you can speak!
                </h1>
                <MultiSelect
                    options={languageData}
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

export default EditLanguagePreferences;