import '../CommunityCorner.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import Popup from 'reactjs-popup';

const locales = {
  "en-AU": require("date-fns/locale/en-AU")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Big Meeting",
    description: "Important Meeting",
    location: "Common Room",
    start: new Date(2022,8,15,8,0),
    end: new Date(2022,8,15,12,0)
  }
]

function CommunityCorner() {
  /* Add a new event*/
  const [newEvent, setNewEvent] = useState({title: "", 
  description:"", location:"", start: "", end: ""})
  /* Array of all events*/
  const [allEvents, setAllEvents] = useState(events)
  /* Selected Event*/
  const [selectedEvent, setSelectedEvent] = useState({title: "", description:"", 
    location:"", start: "", end: ""})

  /* Add a new Event */ 
  const [addOpen, setAddOpen] = useState(false)
  const closeAddModal = () => setAddOpen(false)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
    setNewEvent({title: "", description:"", location: "",
      start: "", end: ""})
    closeAddModal()
  }

  /* Remove a specific Event */
  function removeEvent() {
    setAllEvents(events.filter(rmEvent => rmEvent !== selectedEvent));
  } 

  /* Select an Event*/
  function handleSelectEvent(event) {
    setSelectedEvent(event)
    setNewEvent(event)
    removeEvent()
    setEditOpen(true)
    setNewEvent(event)
  }

  /* Edit a new Event */ 
  const [editOpen, setEditOpen] = useState(false)
  const closeEditModal = () => setEditOpen(false)

  /* edit event window is closed with saving*/ 
  function handleSaveEvent() {
    setSelectedEvent(newEvent)
    setAllEvents([...allEvents, newEvent])
    setNewEvent({title: "", description:"", location: "",
      start: "", end: ""})
    closeEditModal()
  }

  /* Delete an event */
  function handleDeleteEvent(){
    removeEvent();
    setSelectedEvent({title: "", description:"", location: "",
    start: "", end: ""});
    setNewEvent({title: "", description:"", location: "",
    start: "", end: ""});
    closeEditModal();
  } 
  /* edit event window is closed without saving*/ 
  function handleCancelEvent() {
    setNewEvent({title: "", description:"", location: "",
      start: "", end: ""})
    closeEditModal()
  }

  return (
    <div className="Font">
      <h1>Community Corner</h1>
      <Calendar localizer={localizer} 
        events={allEvents} 
        startAccessor="start" 
        endAccessor="end" 
        onSelectEvent={handleSelectEvent}
        style={{height:700, margin:"20px"}}
        popup
      />
      <div className='Font'>
      <button onClick={() => setAddOpen(o => !o)}>Add New Event</button>
      {/* Add a new Event */}
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

        {/* Edit an Event */}
        <Popup open={editOpen} onClose={closeEditModal} position='right center'>
        <div style={{marginLeft:"20px"}}>
          <h2>Edit Event</h2>
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
            <button onClick={handleSaveEvent}> Save</button>
            <button onClick={handleDeleteEvent}>Delete</button>
            <button onClick={handleCancelEvent}> Cancel </button>
          </div> 
        </Popup>
      </div>
    </div>
  );
}

export default CommunityCorner;
