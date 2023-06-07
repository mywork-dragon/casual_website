import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden font-inter">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
