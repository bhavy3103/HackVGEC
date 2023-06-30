import React from "react";
import Navbar from "./components/Navbar";
import Cv from './components/Cv';
import PendingReq from './components/PendingReq';
import EditProfile from './components/EditProfile';
import { Route, Routes } from 'react-router-dom';
import './input.css';
import ApprovalForm from "./components/ApprovalForm";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" Component={Cv} />
        <Route path="/pending" Component={PendingReq} />
        <Route path="/editprofile" Component={EditProfile} />
        <Route path="/approvalform" Component={ApprovalForm} />
      </Routes>
    </div>
  );
}
