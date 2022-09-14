import React, {useState} from 'react';
import Calendar from 'react-calendar'; 
import '../App.css';

function CommunityCorner() {
    const [date, setDate] = useState(new Date())
    return (
        <p>
            <h1 className='Font'>Welcome to the Community Corner</h1>
            <div className="calendar-container">
                <Calendar className = 'Font' onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
        </p>
    );
}

export default CommunityCorner;