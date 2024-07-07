import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { LoginContext } from "../../App";

const Login = ({ updateLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useContext(LoginContext);

  const login = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/auth/login",
      { userName, password },
      { withCredentials: true }
    );
    if (data.error) {
      return alert(data.error.message);
    }
    localStorage.setItem("auth", "true");
    localStorage.setItem("userId", data.response.response.userId);
    setAuth("true");
    return alert(data.response.message);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <p className="text-3xl font-bold mb-4">Login</p>
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-lg font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            className="border-gray-300 border rounded-lg py-2 px-3 text-lg"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="border-gray-300 border rounded-lg py-2 px-3 text-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={login}
          disabled={!userName || !password}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-lg">
        Do not have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => {
            updateLogin(false);
          }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

Login.propTypes = {
  updateLogin: PropTypes.func.isRequired,
};

export default Login;
