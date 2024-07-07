import PropTypes from "prop-types";
import Profile from "./Components/profile/Index";
import Landing from "./Components/home/index";
import Tasks from "./Components/tasks/index";
import { useEffect } from "react";
const Home = ({ header }) => {
  return (
    <div className="w-full h-full px-32 pt-24 py-8">
      <div className="bg-white w-full h-full ">
        {header == "Home" && <Landing />}
        {header == "Profile" && <Profile />}
        {header == "Tasks" && <Tasks />}
      </div>
    </div>
  );
};

Home.propTypes = {
  setHeader: PropTypes.string,
};

export default Home;
