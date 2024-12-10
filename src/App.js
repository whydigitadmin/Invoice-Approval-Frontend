import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Approved2List from "./components/Approved2List";
import ApprovedList from "./components/ApprovedList";
import ConfirmationPage from "./components/ConfirmationPage";
import Dashboard from "./components/Dashbord";
import ListingPage from "./components/ListingPage";
import LoginPage from "./components/LoginPage";
import Overview from "./components/Overview";
import { Reports } from "./components/Reports";
import { Screen } from "./components/Screen";
import { UserCreation } from "./components/UserCreation";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      {" "}
      {/* Add future flag */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="approvedlist" element={<ApprovedList />} />
          <Route path="authenticate" element={<ConfirmationPage />} />
          <Route path="listing" element={<ListingPage />} />
          <Route path="reports" element={<Reports />} />
          <Route path="screen" element={<Screen />} />
          <Route path="userCreation" element={<UserCreation />} />
          <Route path="approved2list" element={<Approved2List />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
