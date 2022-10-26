import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ViewAllResidents(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
    
    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()
    
    const view = (e) => {
        /*
        e.preventDefault()
        //alert(loginUsername);
        //const {loginUsername, loginPassword} = this.state;
        axios.post('/view-other-resident', {fName: user.firstName, lName: user.lastName})
            .then(function (response) {
                console.log(response)
                if (response.data.redirect === '/resident-dashboard') {
                    //const userid = response.data.id
                    //console.log(userid)
                    //window.location = "/resident/"+userid+"/resident-dashboard"
                }
                if (response.data.redirect === '/staff-dashboard') {
                    //const userid = response.data.id
                    //window.location = "/staff/"+userid+"/staff-dashboard"
                } else if (response.data.redirect === '/fail'){
                    console.log("HELLOOOOOOO")
                    return                    
                }
            })
            .catch(function(error) {
                window.location = "/"
            })
            
        */
    }
    return (
        <div className='Font'>
            {/* Show staff dashboard button if logged in as staff */}
            {props.role == "staff" &&
                <Link to="../staff-dashboard">Staff Dashboard</Link>
            }
            {/* Show resident dashboard button if logged in as resident */}
            {props.role == "resident" &&
                <Link to="../resident-dashboard">Resident Dashboard</Link>
      }
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
                            <div className="gallery-column-resident" key = {user.id}>
                                <div className="image-wrapper">
                                <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>{user.firstName} {user.lastName}</p>
                                <p>{user.location}</p>   
                                <button onClick={view}>View</button>
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