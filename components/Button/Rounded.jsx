import React from "react";

const RoundedButton = ({ children, secondary = false }) => {
  return (
    <button className={` ${secondary ? "bg-white" : "bg-primary-500"} py-3 px-12 rounded-full hover:opacity-75 transition-all duration-300 uppercase text-xs leading-4 tracking-wide text-text-300 font-bold border-3 border-black`}>
      {children}
    </button>
  );
};

export default RoundedButton;
