import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, SidebarEmp, Footer, ThemeSettings } from './components';
import { Employees, Files, Overview, Requests, EmployeeView } from './pages';

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="bg-gray-100 min-h-screen max-w-full">
      <BrowserRouter>
        <div className="flex gap-3 dark:bg-main-dark-bg">
          <div className="w-72 flex max-h-screen p-3 pr-0 bg-gray-100 z-40">
            <SidebarEmp />
          </div>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/files" element={<Files />}/>
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
