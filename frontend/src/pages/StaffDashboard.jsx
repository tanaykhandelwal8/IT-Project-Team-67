import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from 'axios';
import UploadImage from "../components/UploadImage";
import "../App.css";

function StaffDashboard(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
    
    const [staffData, setStaffData] = useState([{}])
    const getStaffData = () => {
      axios.get("http://localhost:3001/staff/get-staff-data")
      .then((res) => {setStaffData(res.data)})
    }
    getStaffData()

    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("http://localhost:3001/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()

    const params = useParams();
    const userID = params.id;

    const findStaffById = () => {
        return staffData.find((staff) => {
          return staff._id === userID;
        })
    }
    const user = findStaffById()

    const view = (user) => {

        if (props.role === "resident") {
            window.location.href=("/resident/"+user._id+"/view-other-resident");
        }
        else {
            window.location.href=("/staff/"+user._id+"/view-other-resident");     
        }
        return;
        
        /*const {loginUsername, loginPassword} = this.state;
        axios.post('/view-other-resident', {fName: user.firstName, lName: user.lastName})
            .then(function (response) {
                console.log(response)
                if (response.data.redirect === '/resident-dashboard') {
                    const userid = response.data._id
                    console.log(userid)
                    window.location = ("/resident/"+userid+"/resident-dashboard")
                }
                if (response.data.redirect === '/staff-dashboard') {
                    const userid = response.data._id
                    window.location = ("/staff/"+userid+"/staff-dashboard")
                } else if (response.data.redirect === '/fail'){
                    console.log("HELLOOOOOOO")
                    return                    
                }
            })
            .catch(function(error) {
                window.location = "/"
            })*/
    }

    return (
        <div className='Font'>
        <div>
            <div className="dashboard-title">
            {staffData.map((user, key) => (
                (user._id == userID) ? <h1>Welcome {user.firstName} {user.lastName}</h1> : <div></div>
            ))}
            </div>
        <div className="row">
            <div className="left-column">
                <div className="gallery-card">
                    <UploadImage />
                    <div className="button-wrapper">
                        <Link to="../add-staff">Add New Staff</Link>
                    </div>
                    <br></br>
                    <div className="button-wrapper">
                        <Link to="../add-resident">Add New Resident</Link>
                    </div>
                    <br></br>
                    <div className="button-wrapper">
                        <Link to="../view-all-residents">View All Residents</Link>
                    </div>
                    <br></br>
                    <div className="button-wrapper">
                        <Link to="../community-corner">Visit Community Corner</Link>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="gallery-card">
                    <h2 className="centered-element">Residents List</h2>
                    {(typeof residentData === 'undefined') ? (
                            <p> loading</p>
                        ): (
                        <div className='Font'>
                            {residentData.slice(0,10).map((user, key) => (
                                <div className="gallery-column-resident">
                                    <div className="image-wrapper">
                                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                    <p>{user.firstName} {user.lastName}</p>
                                    <p>{user.location}</p>
                                    <button onClick={() => view(user)}>View</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <p><Link to="../view-all-residents" className="centered-element" style={{padding: "0", backgroundColor: "white", color: "blue", marginLeft: "28vw"}}>View All Residents</Link></p>
            </div>
        </div>
    </div>
    </div>
    );
}

export default StaffDashboard;