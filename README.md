# IT Project Team 67

## IT Project, SEM 2 2022

Members: 

1. Jacques Barons
2. Panos Menidis
3. Jett Miller
4. Srivatsav Manokaran
5. Tanay Khandelwal

Client: Diego Munoz

Supervisor: Rajesh Chittor Sundaram 
## Project Details

Residencely: A web app which is a centralised location containing a digital record of each resident's preferences and knowledge about residents.
It is not a documentation of a person's health details, but it contains personal information about a given person, like favorite animals, music preferences, etc. which allows new staff to get up to speed on 
a resident's preferences without ever needing to interact with the person. This will enable them to handle situations when they need to calm down a resident due to some reason. 

There should also be a calendar which would allow residents to host events. 
## Requirements

### Functional Requirements
* Staff should be able to view/edit all resident's profiles
* Staff should be able to add a new resident/staff member
* Residents can make changes to their own profiles
* Residents can view others residents' pages unless the resident they're viewing has specified otherwise
* Both staff and residents can set, change and reset their own passwords
* Login page for residents and staff
* Resident profiles should have the following
    * name
    * picture
    * short bio
    * interests and hobbies
    * preferred music genre and favorite songs
    * favorite - music, food, activities and animals
    * languages spoken
* Community Corner - a section of the app where information about daily events and happenings can be posted

### Usability Requirements
* Desktop should be supported, supporting iPads is an option
* Target audience is older adults, so should be easy to use


# Installation on a local environment

1. Firstly, run `git clone "https://github.com/tanaykhandelwal8/IT-Project-Team-67.git"`
2. Now that you have the project on your local environment, you'll see that there's a separate node app for frontend and backend. You have to run both of these separately.
3. Make sure you have a mongodb server and store the connection string in a `.env` file in the backend as `MONGO_URL="connection string"`
4. Open a terminal, run `cd backend`, then run `npm install` to install all the dependencies required. Then, run `npm run dev` to start the backend server. The backend server is now running on `localhost:3001`. If everything's successful, you should see 2 lines: 1st line should be saying listening on port 3001 and 2nd one should mention that the app has connected to MongoDB.
5. If you visit this, you won't see anything because it doesn't display anything, but sends information from the database to the frontend. 
5. Now that backend is running, open a new terminal, make sure you're in the root folder (if in backend, run `cd ..`), then run `cd frontend` to go to the frontend folder.
6. Run `npm install` to install all the dependencies for the frontend. Then, run `npm start` to start the frontend. It will take some time, but it will redirect to the browser on the URL `localhost:3000`
7. You're in the app!