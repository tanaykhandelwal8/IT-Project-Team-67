<<<<<<< HEAD
import React from 'react';
import "../App.css"
import Popup from 'reactjs-popup';

export default class AddNewResident extends React.Component {
  constructor(props) {
    super(props);
    // JSON format for a resident
    this.state = {resident: {
        firstName: props.firstName,
        lastName: props.lastName,
        address: props.address,
        dob: props.dob
      }
    }
  }
  
  // handle changes of variables
  handleFirstNameChanged(event) {
    var resident = this.state.resident;
    resident.firstName = event.target.value;
    this.setState({ resident: resident });
  }

  handleLastNameChanged(event) {
    var resident = this.state.resident;
    resident.lastName = event.target.value;
    this.setState({ resident: resident });
  }

  handleAddressChanged(event) {
    var resident = this.state.resident;
    resident.address = event.target.value;
    this.setState({ resident: resident });
  }

  handleDOBChanged(event){
    var resident = this.state.resident;
    resident.dob = event.target.value;
    this.setState({resident: resident});
  }

  // Force console to log state of resident
  handleButtonClicked() {
    console.log(this.state.resident);
  }

  render() {
    return (
=======
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
>>>>>>> main
      <div className='Font'>
        <table className='Font'>
          <tr>
            <th>First Name</th>
              <td>
                <input type="text" className = 'Input '
<<<<<<< HEAD
                value={this.state.resident.firstName} 
                onChange={this.handleFirstNameChanged.bind(this)}/>
              </td>
          </tr>
          <tr>
            <th>Last Name</th>
              <td>
                <input type="text" className = 'Input '
                value={this.state.resident.lastName} 
                onChange={this.handleLastNameChanged.bind(this)}/>
              </td>
          </tr>
          <tr>
            <th>Address</th>
              <td>
                <form>
                    <input className='Input' type="text" 
                    value={this.state.resident.address}
                    onChange={this.handleAddressChanged.bind(this)}/>
                </form>
              </td>
          </tr>
          <tr>
            <th>Date of Birth</th>
              <td>
              <input className='Input' type="date" 
                    value={this.state.resident.dob}
                    onChange={this.handleDOBChanged.bind(this)}/>
=======
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
>>>>>>> main
              </td>
          </tr>
        </table>
        {/* WILL BE CHANGED TO PROFILE OF NEW RESIDENT */}
<<<<<<< HEAD
        <Popup
          trigger={<button onClick={this.handleButtonClicked.bind(this)}>
            Add Resident</button>}>
                <div> Resident Added!</div>
            </Popup>
      </div>
    );
  }
}
=======
        <button onClick={register}>
            Add Resident</button>
      </div>
    );
}

export default AddNewResident;
>>>>>>> main
