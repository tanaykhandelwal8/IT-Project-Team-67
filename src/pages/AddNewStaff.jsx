<<<<<<< HEAD
import React, {useState} from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "../App.css"
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';

function AddNewStaff() {
    const [name, setName] = useState("");
    const [role, setMyRole] = useState("Employee");

    const handleChange = (event) => {setMyRole(event.target.value)}
    const [startDate = Moment().format('DD-MM-YYYY'), setStartDate] = useState(new Date());
    return (
        <p className='Font'>
        <table className='Font'>
            <tr>
                <th>Name</th>
                <td>
                    <form>
                        <input className='Input' type="text" value={name} 
                            onChange={(e) => setName(e.target.value)}/>
                    </form>
                </td>
            </tr>
            <tr>
                <th>Role</th>
                <td>
                    <form>
                        <select className = 'Input' selected={role} value={role} onChange={handleChange}>
                            <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </form>
                </td>
            </tr>
            <tr>
                <th>Date of Birth</th>
                <td>
                    <DatePicker selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    dateFormat='dd/MM/yyyy'
                    className='Input'/>
                </td>
            </tr>
        </table>
        <br></br>
        {name} {role.toString()} {startDate.toLocaleString()}
        </p>
    );
}

export default AddNewStaff;
=======
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
          <Popup
          trigger={<button onClick={this.handleButtonClicked.bind(this)}>
            Add Staff Member</button>}>
                <div> Staff member Added! </div>
            </Popup>
        </div>
      );
    }
  }
>>>>>>> main
