const Header = () => {
  return (
    <div className="w-full h-16 bg-blue-500 flex">
      <div className="w-1/2 h-full flex justify-center">
        <div className="w-3/4 h-full flex items-center">
          <p className="text-xl font-semibold text-white ">UserName</p>
        </div>
      </div>

      <div className="w-1/2 h-full flex justify-center">
        <div className="w-3/4 h-full  flex justify-end">
          <div className="w-3/5 h-full  flex items-center justify-between">
            <p className="text-xl font-semibold text-white ">
              {" "}
              <span>📋</span>
              {" Tasks"}
            </p>
            <p className="text-xl font-semibold text-white ">
              <span>👨‍💼</span>
              {" Profile"}
            </p>
            <p className="text-xl font-semibold text-blue-500 py-2 px-4 rounded-md bg-white ">
              <span>↪</span>
              {" Logout"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
