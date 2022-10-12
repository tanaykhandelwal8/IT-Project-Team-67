<<<<<<< HEAD
import React from 'react';
import "../App.css"
import Popup from 'reactjs-popup';

export default class AddNewStaff extends React.Component {
    constructor(props) {
      super(props);
      // JSON format for a staff member
      this.state = {staff: {
          firstName: props.firstName,
          lastName: props.lastName,
          dob: props.dob
        }
      }
    }
    // handle changes of variables
    handleFirstNameChanged(event) {
      var staff = this.state.staff;
      staff.firstName = event.target.value;
      this.setState({ staff: staff });
    }
  
    handleLastNameChanged(event) {
      var staff = this.state.staff;
      staff.lastName = event.target.value;
      this.setState({ staff: staff });
    }
  
    handleApartmentNoChanged(event) {
      var staff = this.state.staff;
      staff.apartmentNo = event.target.value;
      this.setState({ staff: staff });
    }
  
    handleDOBChanged(event){
      var staff = this.state.staff;
      staff.dob = event.target.value;
      this.setState({staff: staff});
    }
  
    // Force console to log state of staff
    handleButtonClicked() {
      console.log(this.state.staff);
    }
  
    render() {
      return (
        <div className='Font'>
          <table className='Font'>
            <tr>
              <th>First Name</th>
                <td>
                  <input type="text" className = 'Input '
                  value={this.state.staff.firstName} 
                  onChange={this.handleFirstNameChanged.bind(this)}/>
                </td>
            </tr>
            <tr>
              <th>Last Name</th>
                <td>
                  <input type="text" className = 'Input '
                  value={this.state.staff.lastName} 
                  onChange={this.handleLastNameChanged.bind(this)}/>
                </td>
            </tr>
            <tr>
              <th>Date of Birth</th>
                <td>
                <input className='Input' type="date" 
                      value={this.state.staff.dob}
                      onChange={this.handleDOBChanged.bind(this)}/>
                </td>
            </tr>
          </table>
          {/* WILL GO TO STAFF DASHBOARD */}
          <Popup
          trigger={<button onClick={this.handleButtonClicked.bind(this)}>
            Add Staff Member</button>}>
                <div> Staff member Added! </div>
            </Popup>
        </div>
      );
    }
  }
=======
import React, {useEffect, useState} from 'react';
import "../App.css"
import Popup from 'reactjs-popup';
import axios from 'axios'

function AddNewStaff() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [dob, setDOB] = useState("")
    const register = () => {
        axios({
            method:"post",
            data: {
                firstName:firstName,
                lastName: lastName,
                password: password,
                email: email,
                dob: dob
            },
            withCredentials: true,
            url: "http://localhost:3001/register-staff"
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
              <th>Email</th>
              <td>
                  <input type="text" className = 'Input '
                         value={email}
                         onChange={e => setEmail(e.target.value)}/>
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
          Add Staff</button>
    </div>
      );
    }

export default AddNewStaff;
>>>>>>> main
