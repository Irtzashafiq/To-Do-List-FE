import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const SignUp = ({ updateLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const signup = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/user/createUser",
      { userName, password, confirmPassword: cpassword },
      { withCredentials: true }
    );
    if (data.error) {
      return alert(data.error.message);
    }
    return alert(data.response.message);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <p className="text-3xl font-bold mb-4">Sign Up</p>
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
            className="border-gray-300 border rounded-lg py-2 px-3 text-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="text-lg font-semibold mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="border-gray-300 border rounded-lg py-2 px-3 text-lg"
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>

        <button
          disabled={!userName || !password ||!cpassword}
          onClick={signup}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-lg">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => updateLogin(true)}
        >
          Login
        </span>
      </p>
    </div>
  );
};

SignUp.propTypes = {
  updateLogin: PropTypes.func.isRequired,
};

export default SignUp;
