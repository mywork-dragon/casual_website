import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="w-full min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
