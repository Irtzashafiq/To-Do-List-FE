import React, { useState } from "react";
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/SignUp";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <Login updateLogin={setIsLogin} />
      ) : (
        <SignUp updateLogin={setIsLogin} />
      )}
    </>
  );
};

export default Auth;
