import React from "react";
import "./App.css";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import AdminRegistration from "./pages/AdminRegistration";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Logout from './pages/Logout'; // Import the new Logout component

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer, ThemeSettings } from './components';
import { Employees, Files, Overview, Requests } from './pages';

import { useStateContext } from "../../client/src/contexts/ContextProvider";

function App() {

  const { activeMenu } = useStateContext();



return (
  <div className="App">
    <div className="bg-gray-100 min-h-screen max-w-full">
    <BrowserRouter>
        <Link to="/">Home Page</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/adminregistration">Admin Registration</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admindashboard">Admin Dashboard</Link>
      <div className="navbar">
      <div className="flex gap-3 dark:bg-main-dark-bg">
        <div className="w-72 flex max-h-screen p-3 pr-0 bg-gray-100 z-40">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/files" element={<Files />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </div>
      </div>

<Logout /> {/* Include the Logout component in the navbar */}
</div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/registration" element={<Registration />} />
  <Route path="/adminregistration" element={<AdminRegistration />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/admindashboard" element={<AdminDashboard />} />
  <Route path="/" element={<Overview />} />
  <Route path="/overview" element={<Overview />} />
  <Route path="/files" element={<Files />} />
  <Route path="/requests" element={<Requests />} />
  <Route path="/employees" element={<Employees />} />
</Routes>
</BrowserRouter>
</div>
</div>
);
}


export default App;