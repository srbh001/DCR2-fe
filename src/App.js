import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import RegistrationPage from "./pages/RegistrationPage";
import AppointmentsPage from "./pages/AppointmentsPage";

export default function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/*   <Routes> */}
      {/*     <Route path="/" element={<LoginPage />} /> */}
      {/*     <Route path="/register" element={<RegistrationPage />} /> */}
      {/*   </Routes> */}
      {/* </Router> */}
      <AppointmentsPage />
    </div>
  );
}
