import StyledLink from "@/components/Button/Link";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";

const navItems = [
  {
    name: "PRODUCT",
    options: [
      // "PRODUCT",
      {
        name: "Experimentation",
        href: "/experimentation",
      },
      {
        name: "Machine Learning",
        href: "/ml",
      },
    ],
  },
  {
    name: "CASE STUDIES",
    href: "/case-study",
  },
  {
    name: "TECH DOCS",
    href: "https://tech.causallabs.io/",
  },
  {
    name: "COMPANY",
    options: [
      // "PRODUCT",
      {
        name: "ABOUT",
        href: "/about",
      },
      {
        name: "BLOG",
        href: "/blog",
      },
      {
        name: "CONTACT US",
        href: "/contact",
      },
      // "CAREERS",
      // {
      // name: "PRIVACY POLICY",
      // href: "/privacy-policy",
      // },
    ],
  },
];

const Navbar = () => {
  const [active, setActive] = useState(-1);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <nav className="w-full shadow-nav bg-white top-0 sticky z-50">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex justify-between items-center max-h-[65px]">
          <div className="flex items-center flex-1">
            <Link href="/">
              <a>
                <img
                  src="/images/logo.png"
                  className="w-[103px] h-auto object-cover"
                />
              </a>
            </Link>
            <div className="hidden lg:flex items-center space-x-9 ml-10">
              {navItems.map((item, index) => {
                if (!item?.options?.length) {
                  return (
                    <Link key={index} href={`${item.href}`}>
                      <a
                        target={`${
                          item.href.startsWith("/") ? "_self" : "_target"
                        }`}
                        className="uppercase text-us font-bold leading-4 text-text-300 hover:text-primary-500 font-inter"
                      >
                        {item.name}
                      </a>
                    </Link>
                  );
                }
                return (
                  <Dropdown
                    index={index}
                    item={item}
                    key={index}
                    active={active}
                    setActive={setActive}
                  />
                );
              })}
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-9">
            <a
              href="https://tools.causallabs.io/signup"
              target="_blank"
              rel="noreferrer"
              className="uppercase text-text-300 text-us leading-4 font-bold hover:text-primary-500"
            >
              TRY IT OUT
            </a>
            <StyledLink href="https://book.vimcal.com/p/christina/45minutes-0571c">
              Book Demo
            </StyledLink>
          </div>
          <button
            className="flex lg:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 24H26V21.9361H4V24ZM4 16.0319H26V13.9681H4V16.0319ZM4 6V8.06389H26V6H4Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {showSidebar && (
            <div className="lg:hidden">
              <Sidebar navItems={navItems} setShowSidebar={setShowSidebar} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
