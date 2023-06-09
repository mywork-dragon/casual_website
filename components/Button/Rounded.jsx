import React from "react";

const RoundedButton = ({
  children,
  secondary = false,
  href = "/",
  padding = "",
}) => {
  const src = secondary
    ? "/images/buttonSecondary.png"
    : "/images/buttonPrimary.png";
  return (
    <a
      href={href}
      target={href?.startsWith("/") ? "_self" : "_blank"}
      rel="noreferrer"
      style={{ backgroundImage: `url(${src})`, padding: padding || "" }}
      className="py-3 px-12 bg-no-repeat bg-center bg-cover rounded-full hover:opacity-70 transition-all duration-300 uppercase text-xs leading-4 tracking-wide text-text-300 hover:text-text-300 font-bold"
    >
      {children}
    </a>
  );
};

export default RoundedButton;
