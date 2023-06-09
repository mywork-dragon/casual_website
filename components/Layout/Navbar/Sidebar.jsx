import StyledLink from "@/components/Button/Link";
import Link from "next/link";
import React from "react";

const Sidebar = ({ setShowSidebar, navItems }) => {
  return (
    <div className="fixed top-0 right-0 min-h-screen max-h-screen w-full max-w-xs shadow-nav z-50">
      <div
        onClick={() => setShowSidebar(false)}
        className="bg-black fixed inset-0 opacity-40 z-10 cursor-pointer"
      ></div>
      <div className="w-full h-full bg-white z-50 absolute">
        <div className="px-4 py-3 w-full flex flex-col items-start">
          <div className="w-full flex justify-end items-center">
            <button onClick={() => setShowSidebar(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4139 12L19.707 5.70758C20.0977 5.31694 20.0977 4.68359 19.707 4.29298C19.3164 3.90234 18.683 3.90234 18.2924 4.29298L12 10.586L5.70759 4.29298C5.31695 3.90234 4.6836 3.90234 4.29299 4.29298C3.90238 4.68362 3.90235 5.31697 4.29299 5.70758L10.586 12L4.29299 18.2924C3.90235 18.6831 3.90235 19.3164 4.29299 19.707C4.68363 20.0976 5.31698 20.0977 5.70759 19.707L12 13.4139L18.2924 19.707C18.683 20.0977 19.3164 20.0977 19.707 19.707C20.0976 19.3164 20.0976 18.683 19.707 18.2924L13.4139 12Z"
                  fill="#5A5F6D"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-col items-start space-y-8 mt-12 max-h-[calc(100vh-100px)] overflow-auto">
            {navItems.map((item, index) => {
              if (typeof item === "string") {
                const href = item.toLowerCase().replace(" ", "-");
                return (
                  <Link key={index} href={`${href}`}>
                    <a className="uppercase text-base font-bold leading-4 text-text-300 hover:text-primary-500">
                      {item}
                    </a>
                  </Link>
                );
              }
              return item.options.map((option, subIndex) => {
                return (
                  <a
                    href={option.href}
                    key={index + "-" + subIndex}
                    target={option?.href?.startsWith("/") ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="uppercase text-base font-bold leading-4 text-text-300 hover:text-primary-500"
                  >
                    {option.name}
                  </a>
                );
              });
            })}
            <div className="w-full">
              <a
                href="https://tools.causallabs.io/"
                target="_blank"
                rel="noreferrer"
                className="uppercase text-base font-bold leading-4 text-text-300 hover:text-primary-500"
              >
                Login
              </a>
            </div>
            <div className="w-full">
              <StyledLink
                fullWidth
                href="https://book.vimcal.com/p/christina/45minutes-0571c"
              >
                Book Demo
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
