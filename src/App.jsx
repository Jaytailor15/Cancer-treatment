import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"; // Import the Home component

// Placeholder components (replace these with actual imports when you have the components ready)
const MedicalRecords = () => <div className="text-white">Medical Records Page</div>;
const ScreeningSchedules = () => <div className="text-white">Screening Schedules Page</div>;
const Profile = () => <div className="text-white">Profile Page</div>;

const App = () => {
  return (
    <div className="bg-[#13131a] min-h-screen flex">
      <div className="hidden sm:flex">
        <Sidebar />
      </div>
      <div className="flex-1 p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/screening-schedules" element={<ScreeningSchedules />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
