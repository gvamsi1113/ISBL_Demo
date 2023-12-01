import React, { useState, useEffect } from "react";
import axios from "axios";
import globalUser, { updateUser } from './globalUser';
import { EmployeeView, Overview } from '../pages';
import { Sidebar } from '../components'
function Dashboard() {
  const [user, setUser] = useState({ id: null, username: "", role: 0});

  useEffect(() => {

      axios.get("http://localhost:3000/auth/dashboard", { withCredentials: true })
      .then((response) => {
        console.log(response.data)
        updateUser(response.data);
        console.log("new test")
        console.log(response.data)
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    user.role === 2 ? (
        <Overview />
    ) : user.role === 1 ? (
      <EmployeeView />
    ) : null
  );
  
}

export default Dashboard;