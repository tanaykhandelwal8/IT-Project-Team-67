import React, {useEffect, useState} from 'react';
import "../App.css"
import axios from 'axios'
import {Link} from "react-router-dom";

function AddNewStaff(props) {
  /* Navbar should be shown on this page */
  props.funcNav(true)
    // local format for creating a staff member
    const [newStaff, setNewStaff] = useState({
      firstName:"",
      lastName: "",
      email:"",
      password:"",
      dob:""
    })

    /* Send new staff member data to the backend */
    const register = () => {
        axios({
            method:"post",
            data: newStaff,
            withCredentials: true,
            url: "http://localhost:3001/register-staff"
        }).then((res) => console.log(res))
        alert('You have successfully created a new staff member.')
    }

    return (
      <div className='Font'>
      <table className='Font'>
        <tr>
          <th>First Name</th>
            <td>
              <input type="text" className = 'Input '
              value={newStaff.firstName} 
              onChange={e => setNewStaff({...newStaff, firstName: e.target.value})}/>
            </td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>
              <input type="text" className = 'Input '
              value={newStaff.lastName} 
              onChange={e => setNewStaff({...newStaff, lastName: e.target.value})}/>
            </td>
        </tr>
          <tr>
              <th>Email</th>
              <td>
                  <input type="text" className = 'Input '
                         value={newStaff.email}
                         onChange={e => setNewStaff({...newStaff, email: e.target.value})}/>
              </td>
          </tr>
          <tr>
              <th>Password</th>
              <td>
                  <input type="password" className = 'Input '
                         value={newStaff.password}
                         onChange={e => setNewStaff({...newStaff, password: e.target.value})}/>
              </td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>
            <input className='Input' type="date" 
                  value={newStaff.dob}
                  onChange={e => setNewStaff({...newStaff, dob: e.target.value})}/>
            </td>
        </tr>
      </table>
      {/* will link to staff dashboard */}
      <button onClick={register}>Add Staff</button>
      <Link to="../staff-dashboard">Staff Dashboard</Link>
    </div>
      );
    }

export default AddNewStaff;
