import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, SidebarEmp, Footer, ThemeSettings } from './components';
import { Employees, Files, Overview, Requests, EmployeeView, Login, Registration, Dashboard } from './pages';
import globalUser, { updateUser } from './pages/globalUser';

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="bg-gray-100 min-h-screen max-w-full">
    {/* <div>User Role: {globalUser.role}</div> */}
      <BrowserRouter>
        <div className="flex gap-3 dark:bg-main-dark-bg">

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/files" element={<Files />} />
              <Route path="/dashboard/overview" element={<Overview />} />
              <Route path="/dashboard/allfiles" element={<EmployeeView />} />
              <Route path="/dashboard/requests" element={<Requests />} />
              <Route path="/dashboard/employees" element={<Employees />} />
              <Route path="files" element={<Files />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/allfiles" element={<EmployeeView />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/employees" element={<Employees />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
