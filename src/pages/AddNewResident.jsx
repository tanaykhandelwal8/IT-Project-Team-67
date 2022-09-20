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
        apartmentNo: props.apartmentNo,
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

  handleApartmentNoChanged(event) {
    var resident = this.state.resident;
    resident.apartmentNo = event.target.value;
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
      <div className='Font'>
        <table className='Font'>
          <tr>
            <th>First Name</th>
              <td>
                <input type="text" className = 'Input '
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
            <th>Apartment Number</th>
              <td>
                <form>
                    <input className='Input' type="number" 
                    value={this.state.resident.apartmentNo}
                    onChange={this.handleApartmentNoChanged.bind(this)}/>
                </form>
              </td>
          </tr>
          <tr>
            <th>Date of Birth</th>
              <td>
              <input className='Input' type="date" 
                    value={this.state.resident.dob}
                    onChange={this.handleDOBChanged.bind(this)}/>
              </td>
          </tr>
        </table>
        <Popup
          trigger={<button onClick={this.handleButtonClicked.bind(this)}>
            Add Resident</button>}>
                <div> Resident Added!</div>
            </Popup>
      </div>
    );
  }
}