import React, {useState} from 'react';
import "../App.css"
import axios from 'axios'
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

function AddNewResident(props)  {
  /* Navbar should be shown on this page */
  props.funcNav(true)
  // local format for creating a resident
  const [newResident, setNewResident] = useState({
    firstName:"",
    lastName: "",
    email:"",
    password:"",
    location:"",
    dob:"",
    biography:"",
    music: [],
    food: [],
    movies: [],
    animals: [],
    hobbies: [],
    interests: [],
    musicians: [],
    languages: [],
  })
  
  /* send resident details to the backend */
  const register = () => {
    axios({
      method:"post",
      data: newResident,
      withCredentials: true,
      url: "http://localhost:3001/register-resident"
    }).then(function (response) {
      console.log(response)
      if (response.data.redirect === '/success') {
          const userid = response.data.id
          //console.log(userid)
          window.location = "/resident/"+userid+"/resident-dashboard"
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
    
    alert('You have successfully created a new resident.')
  }

  return (
      <div className='Font'>
        <div>
          <Navbar />
          <div style={{height:"96px"}}></div>
        </div>
        <h1 className='Font'> Add New Resident</h1>
        <table className='Font'>
          <tr>
            <th>First Name</th>
              <td>
                <input type="text" className = 'Input '
                value={newResident.firstName} 
                onChange={e => setNewResident({...newResident, firstName: e.target.value})}/>
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <input type="text" className = 'Input '
                value={newResident.lastName} 
                onChange={e => setNewResident({...newResident, lastName: e.target.value})}/>
              </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <input type="text" className = 'Input '
                     value={newResident.email}
                     onChange={e => setNewResident({...newResident, email: e.target.value})}/>
            </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input type="password" className = 'Input '
                     value={newResident.password}
                     onChange={e => setNewResident({...newResident, password: e.target.value})}/>
            </td>
          </tr>
          <tr>
            <th>Location</th>
              <td>
                <form>
                    <input className='Input' type="text" 
                    value={newResident.location}
                    onChange={e => setNewResident({...newResident, location: e.target.value})}/>
                </form>
              </td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>
              <input className='Input' type="date" 
                    value={newResident.dob}
                    onChange={e => setNewResident({...newResident, dob: e.target.value})}/>
              </td>
          </tr>
        </table>
        {/* WILL BE CHANGED TO PROFILE OF NEW RESIDENT */}
        <button onClick={register}>Add Resident</button>
        <Link to="../staff-dashboard">Staff Dashboard</Link>
      </div>
    );
}

export default AddNewResident;
