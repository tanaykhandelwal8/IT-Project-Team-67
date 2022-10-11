import React, {useEffect, useState} from 'react';

function ViewAllResidents() {
    
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch('/get-resident-data')
            .then(res => res.json())
            .then(data => {setBackendData(data)})
    console.log(backendData)
    console.log(Object.keys(backendData))
    }, [])
    
    return (
        <div>
        <div className="centered-box">
            <h1 className='Font'>All Residents</h1>
        </div>
            {/* forEach loop here for every resident*/}
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="centered-gallery">
            <div className="row">
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="gallery-column">
                    <div className="image-wrapper">
                    <img className="view-resident-picture" src={require('../assets/Portrait-Placeholder.png')} alt="" />
                        <p>Name</p>
                        <p>Address</p>
                    </div>
                </div>
            </div>
            </div>

            <div>
                {/* This displays the names */}
            {(typeof backendData === 'undefined') ? (
                    <p> loading</p>
                ): (
                    <div className='Font'>
                        <table>
                        {backendData.map((user, i) =>(
                        <tr key={i}>
                            <div>Name: {user.firstName} {user.lastName} {JSON.stringify(user)}</div>
                        </tr>
                    ))}
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ViewAllResidents;