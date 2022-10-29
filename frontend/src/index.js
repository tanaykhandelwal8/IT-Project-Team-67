import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ResidentDashboard from "./pages/ResidentDashboard";
import EditResidentDashboard from "./pages/EditResidentDashboard";
import ViewOtherResident from "./pages/ViewOtherResident";
import NoPage from "./pages/NoPage";
import AddNewResident from "./pages/AddNewResident";
import AddNewStaff from "./pages/AddNewStaff";
import CommunityCorner from "./pages/CommunityCorner";
import ViewAllResidents from "./pages/ViewAllResidents";
import StaffDashboard from "./pages/StaffDashboard";
import React, { useState } from "react";
import MusicPreferences from "./pages/MusicPreferences";
import EditMusicPreferences from "./pages/EditMusicPreferences";
import EditFoodPreferences from "./pages/EditFoodPreferences";
import FavouriteFood from "./pages/FavouriteFood";
import FavouriteAnimals from "./pages/FavouriteAnimals";
import FavouriteMovies from "./pages/FavouriteMovies";
import LanguagePreferences from "./pages/LanguagePreferences";
import FavouriteHobbies from "./pages/FavouriteHobbies";
import FavouriteInterests from "./pages/FavouriteInterests";
import ChangePassword from "./pages/ChangePassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  /* Should navbar and footer be displayed on the page */
  const [showNav, setShowNav] = useState(false)
  return (
    <BrowserRouter>
      {/* Display Navbar if needbe with extra space added so page displays 
      properly */}
      {showNav && 
        <div>
          <Navbar />
          <div style={{height:"96px"}}></div>
        </div>
      }
      <Routes>
        <Route path="/" element={<Layout />}>
          //Public route
          <Route index element={<Home funcNav={setShowNav}/>} />
          // Catch all
          <Route path="*" element={<NoPage />} />
        </Route>
        // Staff routes
        <Route path="/staff/:id" element={<Layout />}>
            <Route path="staff-dashboard" element={<StaffDashboard funcNav={setShowNav}/>} />
            <Route path="add-resident" element={<AddNewResident funcNav={setShowNav}/>} />
            <Route path="add-staff" element={<AddNewStaff funcNav={setShowNav}/>}/>
            <Route path="community-corner" element={<CommunityCorner funcNav={setShowNav} role="staff"/>}/>
            <Route path="view-all-residents" element={<ViewAllResidents funcNav={setShowNav} role="staff"/>}/>
            <Route path="view-other-resident" element={<ViewOtherResident funcNav={setShowNav} role="staff"/>}/>
        </Route>
          // Resident routes
          <Route path="/resident/:id" element={<Layout />}>
            <Route path="resident-dashboard" element={<ResidentDashboard funcNav={setShowNav}/>} />
            <Route path="edit-resident-dashboard" element={<EditResidentDashboard funcNav={setShowNav}/>} />
            <Route path="community-corner" element={<CommunityCorner funcNav={setShowNav} role="resident"/>}/>
            <Route path="view-all-residents" element={<ViewAllResidents funcNav={setShowNav} role="resident"/>}/>
            <Route path="music-preferences" element={<MusicPreferences funcNav={setShowNav} role="resident"/>}/>
            <Route path="edit-music-preferences" element={<EditMusicPreferences funcNav={setShowNav}/>}/>
            <Route path="edit-food-preferences" element={<EditFoodPreferences funcNav={setShowNav}/>}/>
            <Route path="favourite-food" element={<FavouriteFood funcNav={setShowNav} role="resident"/>}/>
            <Route path="favourite-animals" element={<FavouriteAnimals funcNav={setShowNav} role="resident"/>}/>
            <Route path="favourite-movies" element={<FavouriteMovies funcNav={setShowNav} role="resident"/>}/>
            <Route path="language-preferences" element={<LanguagePreferences funcNav={setShowNav} role="resident"/>}/>
            <Route path="favourite-hobbies" element={<FavouriteHobbies funcNav={setShowNav} role="resident"/>}/>
            <Route path="favourite-interests" element={<FavouriteInterests funcNav={setShowNav} role="resident"/>}/>
            <Route path="view-other-resident" element={<ViewOtherResident funcNav={setShowNav} role="resident"/>}/>
            <Route path="change-password" element={<ChangePassword funcNav={setShowNav}/>}/>
          </Route>
          
      </Routes>
      {/* Display footer if needbe with extra space added so page displays 
      properly */}
      {showNav && 
        <div>
          <div style={{height:"48px"}}></div>
          <Footer />
        </div>
      }
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

