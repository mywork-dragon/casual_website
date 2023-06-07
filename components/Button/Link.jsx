import Link from "next/link";
import React from "react";

const StyledLink = ({ children, href = "/", fullWidth = false }) => {
  return (
    <Link href={href}>
      <a
        style={{ width: fullWidth ? "100%" : "" }}
        className="bg-primary-500 py-2.5 px-4 rounded-md text-us text-center leading-4 text-text-300 font-bold uppercase hover:text-text-300 hover:opacity-75 transition-all duration-300"
      >
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;
