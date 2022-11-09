import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function Footer() {

  const [staffData, setStaffData] = useState([{}])
  const getStaffData = () => {
    axios.get("https://residencely-frontend.herokuapp.com/get-staff-data")
    .then((res) => {setStaffData(res.data)})
  }
  getStaffData()

  const [residentData, setResidentData] = useState([{}])
  const getResidentData = () => {
    axios.get("https://residencely-frontend.herokuapp.com/resident/get-resident-data")
    .then((res) => {setResidentData(res.data)})
  }
  getResidentData()

  const params = useParams();
  const userID = params.id;

  return (
    <nav>
        <footer style={{zIndex:"109", position:"fixed"}}>
            <p style={{"float": "left", "margin-left": "5vw"}}><i>Residencely</i></p>
            {/*{residentData.map((user, key) => (
              (user._id === userID) ? <p style={{"float":"right", "margin-right": "5vw"}}>Signed in as {user.firstName} {user.lastName}</p> : <div></div>
            ))}
            {staffData.map((user, key) => (
              (user._id === userID) ? <p style={{"float":"right", "margin-right": "5vw"}}>Signed in as {user.firstName} {user.lastName}</p> : <div></div>
            ))} */}
        </footer>
    </nav>
  );
}

export default Footer;