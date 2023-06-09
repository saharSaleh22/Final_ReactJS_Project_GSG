import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header Inpage={"pages"} />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
