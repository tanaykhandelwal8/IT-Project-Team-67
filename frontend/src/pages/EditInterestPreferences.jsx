import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import "../App.css";

function EditInterestPreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const params = useParams();
    const userID = params.id;

    const [selectedData, setSelectedData] = useState([]);

    const [interestData, setInterestData] = useState([{}])
    const getInterestData = () => {
        axios.get("/get-interest-data")
        .then((res) => {setInterestData(res.data)})
    }
    getInterestData()

    const handleSubmit = () => {
        axios({
            method:"post",
            data: {objects: [userID, selectedData]},
            withCredentials: true,
            url: "/update-interest-preferences"
        }).then((res) => console.log(res))
    }

    return (
        <div>
            <div className="dashboard-title">
                <h1 className='Font' style={{display: "inline"}}>Edit Interest Preferences</h1>
                <Link to="../favourite-interests" style={{float: "right"}}>View Preferences</Link>
            </div>
            <div>
                <h1>
                    Select your favourite interests!
                </h1>
                <MultiSelect
                    options={interestData}
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

export default EditInterestPreferences;