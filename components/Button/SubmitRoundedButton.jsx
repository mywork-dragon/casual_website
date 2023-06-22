import React from "react";

const SubmitRoundedButton = ({ children, secondary = false, padding = "" }) => {
  const src = secondary
    ? "/images/buttonSecondary.png"
    : "/images/buttonPrimary.png";
  return (
    <button
      type="submit"
      style={{ backgroundImage: `url(${src})`, padding: padding || "" }}
      className="py-3 font-inter !px-14 bg-no-repeat bg-center bg-cover rounded-full hover:opacity-70 transition-all duration-300 uppercase text-xs leading-4 tracking-wide text-text-300 hover:text-text-300 font-bold"
    >
      {children}
    </button>
  );
};

export default SubmitRoundedButton;
