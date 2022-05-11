import React from "react";
import "./layout.scss";
import { Outlet } from "react-router-dom";
//
import MobileTopMenu from "../components/MobileTopMenu/MobileTopMenu";
import Navigation from "../components/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <MobileTopMenu />
        <div className="layout__white-content">
          <Outlet />
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Layout;
