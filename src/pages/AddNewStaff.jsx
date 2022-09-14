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