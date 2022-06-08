import * as React from "react";
import { Link } from "react-router-dom";
import MyAppbar from "../Layout/appbar/MyAppbar";

const LandingPage = () => {
  return (
    <>
      {/* <MyAppbar></MyAppbar> */}
      <Link to="/loginmain">Go to the login page</Link>
    </>
  );
};

export default LandingPage;
