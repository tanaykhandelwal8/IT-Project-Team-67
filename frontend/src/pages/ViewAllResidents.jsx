import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ViewAllResidents(props) {
    /* Navbar should be shown on this page */
    props.funcNav(true)
    
    const [residentData, setResidentData] = useState([{}])
    const getResidentData = () => {
      axios.get("https://residencely-frontend.herokuapp.com/resident/get-resident-data")
      .then((res) => {setResidentData(res.data)})
    }
    getResidentData()
    
    /* Search Bar code */
    const [query, setQuery] = useState("")
    const view = (user) => {

        if (props.role === "resident") {
            window.location.href=("/resident/"+user._id+"/view-other-resident");
        }
        else {
            window.location.href=("/staff/"+user._id+"/view-other-resident");     
        }
        return;
        
        /*const {loginUsername, loginPassword} = this.state;

    const view = (e) => {
        /*
        e.preventDefault()
        //alert(loginUsername);
        //const {loginUsername, loginPassword} = this.state;
        axios.post('/view-other-resident', {fName: user.firstName, lName: user.lastName})
            .then(function (response) {
                console.log(response)
                if (response.data.redirect === '/resident-dashboard') {
                    const userid = response.data._id
                    console.log(userid)
                    window.location = ("/resident/"+userid+"/resident-dashboard")
                }
                if (response.data.redirect === '/staff-dashboard') {
                    const userid = response.data._id
                    window.location = ("/staff/"+userid+"/staff-dashboard")
                } else if (response.data.redirect === '/fail'){
                    console.log("HELLOOOOOOO")
                    return                    
                }
            })
            .catch(function(error) {
                window.location = "/"
            })*/
    }

    return (
        <div className='Font'>
            {/* Show staff dashboard button if logged in as staff */}
            {props.role === "staff" &&
                <Link to="../staff-dashboard">Staff Dashboard</Link>
            }
            {/* Show resident dashboard button if logged in as resident */}
            {props.role === "resident" &&
                <Link to="../resident-dashboard">Resident Dashboard</Link>
      }
            <div className="centered-box">
                <h1 className='Font'>All Residents</h1>
            </div>
            {/* Search Bar */}
            <div>
                <input className='search-bar' 
                    placeholder='Search Residents' value={query}
                    onChange={e => setQuery(e.target.value)}></input>
            </div>
            <div>
                {/* This displays the names and pictures of residents*/}
            {(typeof residentData === 'undefined') ? (
                    <p> loading</p>
                ): (
                    <div className='Font'>
                        {/* Only display residents who's names match the 
                        search criteria if search bar is not empty*/}
                        {residentData.filter(post => {
                            if (query === ""){
                                return post;
                            } else if ((post.firstName.toLowerCase() + " " 
                                    + post.lastName.toLowerCase())
                                    .includes(query.toLowerCase())){
                                return post;
                            }
                        }).map((user, i) =>(
                            <div className="gallery-column-resident" key = {user.id}>
                                <div className="image-wrapper">
                                <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                                <p>{user.firstName} {user.lastName}</p>
                                <p>{user.location}</p>   
                                <button onClick={() => view(user)}>View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ViewAllResidents;