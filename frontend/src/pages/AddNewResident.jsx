import React, {useState} from 'react';
import "../App.css"
import Popup from 'reactjs-popup';
import axios from 'axios'

function AddNewResident()  {
  // temporary constants
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [location, setLocation] = useState("")
  const [dob, setDOB] = useState("")
  const register = () => {
    axios({
      method:"post",
      data: {
        firstName:firstName,
        lastName: lastName,
        email: email,
        password: password,
        location: location,
        dob: dob
      },
      withCredentials: true,
      url: "http://localhost:3001/register-resident"
    }).then((res) => console.log(res))
  }

  return (
      <div className='Font'>
        <table className='Font'>
          <tr>
            <th>First Name</th>
              <td>
                <input type="text" className = 'Input '
                value={firstName} 
                onChange={e => setFirstName(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <input type="text" className = 'Input '
                value={lastName} 
                onChange={e => setLastName(e.target.value)}/>
              </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input type="password" className = 'Input '
                     value={password}
                     onChange={e => setPassword(e.target.value)}/>
            </td>
          </tr>

          <tr>
            <th>Email</th>
            <td>
              <input type="text" className = 'Input '
                     value={email}
                     onChange={e => setEmail(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <th>Location</th>
              <td>
                <form>
                    <input className='Input' type="text" 
                    value={location}
                    onChange={e => setLocation(e.target.value)}/>
                </form>
              </td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>
              <input className='Input' type="date" 
                    value={dob}
                    onChange={e => setDOB(e.target.value)}/>
              </td>
          </tr>
        </table>
        {/* WILL BE CHANGED TO PROFILE OF NEW RESIDENT */}
        <button onClick={register}>
            Add Resident</button>
      </div>
    );
}

export default AddNewResident;
