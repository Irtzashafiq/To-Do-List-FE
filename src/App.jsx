import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";


function App() {
  const [login, setLogin] = useState(true);

  const updateLogin = (newState) => {
    setLogin(newState);
  };

  return (
    <>
      <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
        {login ? (
          <Login updateLogin={updateLogin} />
        ) : (
          <SignUp updateLogin={updateLogin} />
        )}
      </div>
    </>
  );
}

export default App;
