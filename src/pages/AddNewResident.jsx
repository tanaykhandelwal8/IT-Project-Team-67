import React , { useState } from 'react';
import DatePicker from 'react-datepicker';
import "../App.css"
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';

function AddNewResident() {
    const [name, setName] = useState("");
    const [apartment, setApartment] = useState("");
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
                <th>Apartment Number</th>
                <td>
                    <form>
                        <input className='Input' type="number" 
                            onChange={(e) => setApartment(e.target.value)}/>
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
        {name} {apartment} {startDate.toLocaleString()}
        </p>
    );
}

export default AddNewResident;