import '../CommunityCorner.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import parseISO from "date-fns/parseISO";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useEffect, useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import Popup from 'reactjs-popup';
import axios from 'axios';
import {Link} from 'react-router-dom';

const locales = {
  "en-AU": require("date-fns/locale/en-AU")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  parseISO,
  startOfWeek,
  getDay,
  locales
})

function CommunityCorner(props) {
  /* Navbar should be shown on this page */
  props.funcNav(true)
  // variable to store data fetched from backend
  const [backendData, setBackendData] = useState([{}])
  /* function to get events from backend */
  const getEvents = () => {
    axios.get("http://localhost:3001/get-events-data")
    .then((res) => {setBackendData(res.data)})
    /* format all sent dates into date objects to work with JS correctly*/
    for (let i=0;i<backendData.length;i++){
      backendData[i].start = new Date(backendData[i].start)
      backendData[i].end = new Date(backendData[i].end)
    }
  }
  //Constantly fetch events from backend
  getEvents()

  /* send an event to the backend */ 
  const registerEvent = () => {
    axios({
      method:"post",
      data: newEvent,
      withCredentials: true,
      url: "http://localhost:3001/add-event"
    }).then((res) => console.log(res))
  }

  /* delete an event from the backend */ 
  const deleteEvent = () => {
    axios({
      method:"post",
      data: selectedEvent,
      withCredentials: true,
      url: "http://localhost:3001/delete-event"
    }).then((res) => console.log(res))
  }
  /* Blank new event */
  const [newEvent, setNewEvent] = useState({
    title: "", 
    description:"", 
    location:"", 
    host:"",
    start: "", 
    end: ""})

  /* blank selected event, used for when viewing / editing an event */
  const [selectedEvent, setSelectedEvent] = useState({
    title: "", 
    description:"", 
    location:"", 
    host:"",
    start: "", 
    end: ""})

  /* should the popup for adding an event be open again */ 
  const [addOpen, setAddOpen] = useState(false)
  const closeAddModal = () => setAddOpen(false)

  /* send an event to the backend and then fetch new backend data, close add 
  event popup*/ 
  function handleAddEvent() {
    registerEvent()
    getEvents()
    closeAddModal()
  }

  /* Select an Event to edit and set both */
  function handleSelectEvent(event) {
    setSelectedEvent(event)
    setNewEvent(event)
    setEditOpen(true)
  }

  /* Edit a new Event */ 
  const [editOpen, setEditOpen] = useState(false)
  const closeEditModal = () => setEditOpen(false)

  /* Save changes to an event by first deleting it from backend then sending the
  updated event*/
  function handleSaveEvent() {
    deleteEvent()
    registerEvent()
    setNewEvent({title: "", description:"", location: "",
      start: "", end: ""})
    setSelectedEvent({title: "", description:"", location: "",
      start: "", end: ""})
    getEvents()
    closeEditModal()
  }

  /* Delete an event */
  function handleDeleteEvent(){
    deleteEvent()
    setNewEvent({title: "", description:"", location: "",
    start: "", end: ""});
    closeEditModal();
  }

  /* edit event window is closed without saving so send the previously selected 
  event back to the backend*/
  function handleCancelEvent() {
    setNewEvent({title: "", description:"", location: "",
      start: "", end: ""})
    closeEditModal()
  }

  return (
    <div className="CommunityCorner">
      <h1>Community Corner</h1>
      <Calendar localizer={localizer} 
        events={backendData} 
        startAccessor="start" 
        endAccessor="end" 
        onSelectEvent={handleSelectEvent}
        style={{height:500, margin:"20px"}}
        popup
      />
      <div className='Font'>
      <button onClick={() => setAddOpen(o => !o)}>Add New Event</button>
      {/* Popup for Adding a new Event */}
        <Popup open={addOpen} onClose={closeAddModal} position='right center'>
        <div style={{marginLeft:"20px"}}>
          <h2>Add New Event</h2>
            <input type="text" placeholder='Add Title' 
              style={{marginRight:"10px", fontSize:"20px"}} 
              value={newEvent.title} 
              onChange={(e) => 
                setNewEvent({...newEvent, title: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <textarea placeholder='Description'
              value={newEvent.description} 
              onChange={(e) => 
                setNewEvent({...newEvent, description: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <input type="text" placeholder='Add Location' 
              style={{marginRight:"10px", fontSize:"20px"}} 
              value={newEvent.location} 
              onChange={(e) => 
                setNewEvent({...newEvent, location: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <input type="text" placeholder='Host' 
              style={{marginRight:"10px", fontSize:"20px"}} 
              value={newEvent.host} 
              onChange={(e) => 
                setNewEvent({...newEvent, host: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <DatePicker placeholderText='Start Date' 
              style={{marginRight: "10px"}}
              selected={newEvent.start} 
              onChange={(start) => setNewEvent({...newEvent, start})} 
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              className='AddEvent'
            />
            <br/>
            <br/>
            <DatePicker placeholderText='End Date' 
              selected={newEvent.end} 
              onChange={(end) => setNewEvent({...newEvent, end})} 
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              className='AddEvent'
            />
            <br/>
            <br/>
            <button onClick={handleAddEvent}> Add Event</button>
            <button onClick={closeAddModal}> Cancel </button>
          </div> 
        </Popup>

        {/* Popup for Editing an Event */}
        <Popup open={editOpen} onClose={closeEditModal} position='right center'>
        <div style={{marginLeft:"20px"}}>
        <h2>Add New Event</h2>
            <input type="text" placeholder='Add Title' 
              style={{marginRight:"10px", fontSize:"20px"}} 
              value={newEvent.title} 
              onChange={(e) => 
                setNewEvent({...newEvent, title: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <textarea placeholder='Description'
              value={newEvent.description} 
              onChange={(e) => 
                setNewEvent({...newEvent, description: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <input type="text" placeholder='Add Location' 
              style={{marginRight:"10px", fontSize:"20px"}} 
              value={newEvent.location} 
              onChange={(e) => 
                setNewEvent({...newEvent, location: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <input type="text" placeholder='Host' 
              style={{marginRight:"10px", fontSize:"20px"}} 
              value={newEvent.host} 
              onChange={(e) => 
                setNewEvent({...newEvent, host: e.target.value})}
              className='AddEvent'
            />
            <br/>
            <br/>
            <DatePicker placeholderText='Start Date' 
              style={{marginRight: "10px"}}
              selected={newEvent.start} 
              onChange={(start) => setNewEvent({...newEvent, start})} 
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              className='AddEvent'
            />
            <br/>
            <br/>
            <DatePicker placeholderText='End Date' 
              selected={newEvent.end} 
              onChange={(end) => setNewEvent({...newEvent, end})} 
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              className='AddEvent'
            />
            <br/>
            <br/>
            <button onClick={handleSaveEvent}> Save </button>
            <button onClick={handleDeleteEvent}> Delete Event </button>
            <button onClick={handleCancelEvent}> Cancel </button>
          </div> 
        </Popup>
      {/* Show staff dashboard button if logged in as staff */}
      {props.role == "staff" &&
        <Link to="../staff-dashboard">Staff Dashboard</Link>
      }
      {/* Show resident dashboard button if logged in as resident */}
      {props.role == "resident" &&
        <Link to="../resident-dashboard">Resident Dashboard</Link>
      }
      </div>
    </div>
  );
}

export default CommunityCorner;
