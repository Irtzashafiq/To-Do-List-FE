import React from "react";
import PropTypes from "prop-types";

const Login = ({ updateLogin }) => {
  return (
    <div className=" flex flex-col gap-y-8 justify-center items-center w-1/4 h-3/5 bg-white ">
      <p className="text-lg">Login</p>
      <p className="text-lg">
        {"Do not have an Account?"}{" "}
        <span
          className=" hover:underline hover:text-blue-400 cursor-pointer"
          onClick={() => updateLogin(false)}
        >
          SignUp
        </span>
      </p>
    </div>
  );
};

Login.propTypes = {
  updateLogin: PropTypes.func,
};

export default Login;
