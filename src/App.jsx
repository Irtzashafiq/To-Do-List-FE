import { createContext, useEffect, useState } from "react";
import Auth from "./Auth-page";
import Index from "./Components/Layout";

export const LoginContext = createContext();
function App() {
  const authVal = localStorage.getItem("auth");
  const [auth, setAuth] = useState("false");
  useEffect(() => {
    setAuth(authVal);
  }, [authVal]);

  return (
    <>
      <LoginContext.Provider value={[auth, setAuth]}>
        <div className="w-screen h-screen flex justify-center items-center bg-gray-200 ">
          {authVal === "true" ? <Index /> : <Auth />}
        </div>
      </LoginContext.Provider>
    </>
  );
}

export default App;
