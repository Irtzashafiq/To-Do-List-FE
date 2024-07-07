import { useContext } from "react";
import { LoginContext } from "../../App";

const Header = ({ setHeader }) => {
  const [auth, setAuth] = useContext(LoginContext);

  return (
    <div className="w-full h-16 absolute bg-blue-500 flex">
      <div className="w-1/2 h-full flex justify-center">
        <div className="w-3/4 h-full flex items-center">
          <p
            className="text-xl font-semibold text-white cursor-pointer"
            onClick={() => setHeader("Profile")}
          >
            UserName
          </p>
        </div>
      </div>

      <div className="w-3/4 sm:w-1/2 h-full flex justify-center">
        <div className="w-4/5 sm:w-3/4 h-full  flex justify-end">
          <div className="w-4/5 h-full  flex items-center justify-between">
            <p
              className="text-xl font-semibold text-white cursor-pointer "
              onClick={() => setHeader("Home")}
            >
              {"🏠 "}
              <span className="max-[640px]:hidden">{"Home"}</span>
            </p>
            <p
              className="text-xl font-semibold text-white cursor-pointer "
              onClick={() => setHeader("Tasks")}
            >
              {"📋 "}
              <span className="max-[640px]:hidden">{"Tasks"}</span>
            </p>
            <p
              className="text-xl font-semibold text-white cursor-pointer"
              onClick={() => setHeader("Profile")}
            >
              {"👨‍💼 "}
              <span className="max-[640px]:hidden">{"Profile"}</span>
            </p>
            <p className="text-xl font-semibold text-blue-500  cursor-pointer ">
              <span className="min-[640px]:hidden py-2 px-4 rounded-md bg-white">
                {"↪"}
              </span>

              <span
                onClick={() => {
                  localStorage.setItem("auth", "false");
                  localStorage.setItem("userId", "");
                  setAuth("false");
                }}
                className="max-[640px]:hidden py-2 px-4 rounded-md bg-white"
              >
                {"Logout"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
