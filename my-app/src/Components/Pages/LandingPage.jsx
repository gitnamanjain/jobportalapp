import * as React from "react";
import { Link } from "react-router-dom";
import MyAppbar from "../Layout/appbar/MyAppbar";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const { isAuth } = useSelector((state) => state.login);

  return (
    <>
      {/* {(() => {
        if (!isAuth) {
          return <MyAppbar></MyAppbar>;
        }
      })()} */}
      <Link to="/loginmain">Go to the login page</Link>
    </>
  );
};

export default LandingPage;
