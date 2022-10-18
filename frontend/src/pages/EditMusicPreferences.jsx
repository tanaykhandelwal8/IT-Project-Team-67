import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import "../App.css";

function EditMusicPreferences(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)

    const [musicData, setMusicData] = useState([{}])
    const getMusicData = () => {
      axios.get("http://localhost:3001/get-music-data")
      .then((res) => {setMusicData(res.data)})
    }
    getMusicData()
    
    const params = useParams();
    const userID = params.id;

    const [selected, setSelected] = useState([]);

    function handleSelect(data) {
        setSelected(data);
    }

    return (
        <div>
            <div className="dashboard-title">
                <h1 className='Font' style={{display: "inline"}}>Edit Music Preferences</h1>
                <Link to="../music-preferences" style={{float: "right"}}>View Preferences</Link>
            </div>
            <div>
                <h1>
                    Select your favourite songs!
                </h1>
                <pre>{JSON.stringify(selected)}</pre>
                <MultiSelect
                    options={musicData}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                />
            </div>


        </div>
    )
}

export default EditMusicPreferences;