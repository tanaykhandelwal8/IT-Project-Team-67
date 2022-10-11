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
import MusicPreferences from "./pages/MusicPreferences";
import FavouriteFood from "./pages/FavouriteFood";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resident-dashboard" element={<ResidentDashboard />} />
          <Route path="staff-dashboard" element={<StaffDashboard />} />
          <Route path="add-resident" element={<AddNewResident />} />
          <Route path="add-staff" element={<AddNewStaff/>}/>
          <Route path="community-corner" element={<CommunityCorner/>}/>
          <Route path="view-all-residents" element={<ViewAllResidents/>}/>
          <Route path="music-preferences" element={<MusicPreferences/>}/>
          <Route path="favourite-food" element={<FavouriteFood/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));