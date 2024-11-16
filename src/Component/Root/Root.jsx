import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  const location = useLocation();

  const noHEaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {noHEaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHEaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
