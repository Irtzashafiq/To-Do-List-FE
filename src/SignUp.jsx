import React from "react";
import PropTypes from "prop-types";

const SignUp = ({ updateLogin }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 w-1/4 h-3/5 bg-white">
      <p className="text-lg">SignUp</p>
      <p className="text-lg">
        {"Already have an account?"}{" "}
        <span
          className=" hover:cursor-pointer hover:text-blue-400 hover: underline"
          onClick={() => {
            updateLogin(true);
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

SignUp.propTypes = {
  updateLogin: PropTypes.func,
};

export default SignUp;
