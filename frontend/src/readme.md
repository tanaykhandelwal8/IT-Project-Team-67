# Getting stuff from Express to React pages

As of now, I've only got staff and resident data but if you wanna get something else, it shouldn't be too hard.
Look at `backend/index.js` to see how it's done, should be pretty straightforward. 

Here's the code for displaying it on the front-end: 

```
import React, {useEffect, useState} from 'react';

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
    fetch('/api')
        .then(res => res.json())
        .then(data => {setBackendData(data)})
}, [])
```

This code gets the data, here's the code to display it: 

```
{(typeof backendData.users === 'undefined') ? (
    <p> loading</p>
): (
    backendData.users.map((user, i) => {
        <p key={{i}}>{user}</p>
    })
)}
```
