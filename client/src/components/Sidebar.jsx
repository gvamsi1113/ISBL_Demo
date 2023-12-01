import React from "react";
import axios from 'axios';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import globalUser, { updateUser } from '../pages/globalUser';

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  console.log('Global User:', globalUser);
  const { activeMenu, setActiveMenu } = useStateContext();
  const activeLinkCss =
    "flex items-center pt-9 pb-9 rounded-lg text-gray-400 text-md hover:bg-light-gray underline";
  const normalLinkCss =
    "flex items-center pt-9 pb-9 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hovertext-black hover:bg-light-gray";
    const navigate = useNavigate();
    const handleLogout = () => {
      axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true })
      .then(() => {
        // Clear the access-token cookie on successful logout
        updateUser({ id: 0, username: "", role: 0 });
        document.cookie = "access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        navigate("/login"); // Navigate to login page

      })
      .catch((error) => {
        // Handle any errors during logout
        console.error("Logout error:", error);
      });
    };
  return (
    <div className="flex-1 flex flex-col md:overflow-hidden overflow-auto md:hover:overflow-auto p-3 pb-8 justify-between bg-white rounded-3xl drop-shadow-xl max-h-screen">
      {activeMenu && globalUser.role >= 0 && (

        <>
          <div className="flex justify-between items-center mx-auto">
            <div className="flex flex-col items-center">
              <div
                to="/"
                className="text-xl items-center gap-3 m-4 mt-6 flex font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware /> <span>RepoManager</span>
              </div>
              {/* Login NavLink */}
              {/* <NavLink to="/login" className="font-extrabold text-gray-500 mb-4">
                <span>Login</span>
              </NavLink> */}
              <NavLink
                onClick={handleLogout}
                className="font-extrabold text-gray-500"
              >
                <span>Logout</span>
              </NavLink>
            </div>

            {/* <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
              <MdOutlineCancel />
            </button>
            </TooltipComponent> */}
          </div>
          <div className="flex flex-col">
            {links.map((item) => (
              <NavLink
                to={`${item.name}`}
                key="link.name"
                onClick={() => {}}
                className={({ isActive }) =>
                  isActive ? activeLinkCss : normalLinkCss
                }
              >
                <span className="capitalize mx-auto">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
