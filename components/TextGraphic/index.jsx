import React from "react";

const TextGraphic = ({ children, bottom = "", height = "" }) => {
  return (
    <span className="relative z-10">
      <span
        style={{ bottom: bottom || "", height: height || "" }}
        className="absolute z-[-1] w-full h-[12px] bg-primary-500 mix-blend-multiply bottom-[8px]"
      ></span>
      <span className="relative z-1">{children}</span>
    </span>
  );
};

export default TextGraphic;
