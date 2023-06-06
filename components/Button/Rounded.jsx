import React from "react";

const RoundedButton = ({ children, secondary = false }) => {
  const src = secondary
    ? "/images/buttonSecondary.png"
    : "/images/buttonPrimary.png";
  return (
    <button
      style={{ backgroundImage: `url(${src})` }}
      className="py-3 px-12 bg-no-repeat bg-center bg-cover rounded-full hover:opacity-70 transition-all duration-300 uppercase text-xs leading-4 tracking-wide text-text-300 font-bold"
    >
      {children}
    </button>
  );
};

export default RoundedButton;
