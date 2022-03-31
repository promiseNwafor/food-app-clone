import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";

const Wrapper = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Wrapper;
