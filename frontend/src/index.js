import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ResidentDashboard from "./pages/ResidentDashboard";
import NoPage from "./pages/NoPage";
import AddNewResident from "./pages/AddNewResident";
import AddNewStaff from "./pages/AddNewStaff";
import CommunityCorner from "./pages/CommunityCorner";
import ViewAllResidents from "./pages/ViewAllResidents";
import StaffDashboard from "./pages/StaffDashboard";
import Music from "./pages/MusicPreference";
import React from "react";
import MusicPreferences from "./pages/MusicPreferences";
import FavouriteFood from "./pages/FavouriteFood";
import FavouriteAnimals from "./pages/FavouriteAnimals";
import FavouriteMovies from "./pages/FavouriteMovies";
import LanguagePreferences from "./pages/LanguagePreferences";
import HobbiesInterests from "./pages/HobbiesInterests";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          //Public route
          <Route index element={<Home />} />
          // Staff routes
          // Resident routes
          // Shared routes
          
            <Route path="resident-dashboard" element={<ResidentDashboard />} />
            <Route path="staff-dashboard" element={<StaffDashboard />} />
            <Route path="add-resident" element={<AddNewResident />} />
            <Route path="add-staff" element={<AddNewStaff/>}/>
            <Route path="music" element={<Music/>}/>
            <Route path="community-corner" element={<CommunityCorner/>}/>
            <Route path="view-all-residents" element={<ViewAllResidents/>}/>
            <Route path="music-preferences" element={<MusicPreferences/>}/>
            <Route path="favourite-food" element={<FavouriteFood/>}/>
            <Route path="favourite-animals" element={<FavouriteAnimals/>}/>
            <Route path="favourite-movies" element={<FavouriteMovies/>}/>
            <Route path="language-preferences" element={<LanguagePreferences/>}/>
            <Route path="hobbies-interests" element={<HobbiesInterests/>}/>
          
          // Catch all
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

