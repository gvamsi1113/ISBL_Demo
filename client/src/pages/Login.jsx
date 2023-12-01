import React, { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add an error state

  const navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3000/auth/login", data, { withCredentials: true })
      .then((response) => {
        console.log(response.data);

        const accessToken = response.data["access-token"];

        // Set the access token as a cookie
        document.cookie = `access-token=${accessToken}; path=/; max-age=${60 * 60 * 24 * 30}`;


        navigate("/dashboard"); // Use navigate instead of history.push
      })
      .catch((error) => {
        // Handle authentication error
        setError("Wrong Username and Password Combination");
      });
  };

  return (
    <div className="flex flex-row-reverse items-center h-screen w-screen bg-slate-200">
    <div className="w-full max-w-sm p-3 flex h-full">
        <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-28 flex-1 flex flex-col-reverse gap-6">
            
            <div className="flex items-center">
                <button className="bg-gray-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={login}>
                    Login
                </button>
            </div>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(event) => {setPassword(event.target.value);}}/>
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value);}}/>
            </div>
        </form>
    </div>
</div>

  );
}

export default Login;

