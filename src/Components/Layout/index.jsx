import { LoginContext } from "../../App";
import Home from "../../Home";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";

const Index = () => {
  const [header, setHeader] = useState("Home");
  const [auth, setAuth] = useContext(LoginContext);
  console.log("header state ", header);
  useEffect(() => {
    console.log(header);
  }, [header]);
  return (
    <div className="w-full h-full ">
      <Header setHeader={setHeader} />
      <Home header={header} />
    </div>
  );
};

export default Index;
