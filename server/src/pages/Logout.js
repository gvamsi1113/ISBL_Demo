import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { useCookies } from 'react-cookie';

function Logout() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    axios.post("http://localhost:3001/auth/logout", {}, { withCredentials: true })
      .then(() => {
        // Clear the access-token cookie on successful logout
        document.cookie = "access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        navigate("/login"); // Use navigate function instead of history.push
      })
      .catch((error) => {
        // Handle any errors during logout, if necessary
        console.error("Logout error:", error);
      });
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;



// import React from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useCookies } from 'react-cookie';

// function Logout() {
//   const history = useHistory();

//   const handleLogout = () => {
//     axios.post("http://localhost:3001/auth/logout", {}, { withCredentials: true })
//       .then(() => {
//         // Clear the access-token cookie on successful logout
//         document.cookie = "access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
//         history.push("/login"); // Redirect to the login page after logout
//       })
//       .catch((error) => {
//         // Handle any errors during logout, if necessary
//         console.error("Logout error:", error);
//       });
//   }

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Logout;
