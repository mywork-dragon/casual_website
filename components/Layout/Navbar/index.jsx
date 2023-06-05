import StyledLink from "@/components/Button/Link";
import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

const navItems = [
  "PRODUCT",
  "CASE STUDIES",
  {
    name: "RESOURCES",
    options: ["DOCS", "BLOG"],
  },
  {
    name: "COMPANY",
    options: ["PRODUCT", "ABOUT", "CONTACT", "CAREERS", "PRIVACY POLICY"],
  },
];

const Navbar = () => {
  return (
    <nav className="w-full shadow-nav bg-white">
      <div className="w-full max-w-7xl px-5 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex justify-between items-center max-h-[65px]">
          <div className="flex items-center flex-1">
            <img
              src="/images/logo.png"
              className="w-[103px] h-auto object-cover"
            />
            <div className="flex items-center space-x-9 ml-10">
              {navItems.map((item, index) => {
                if (typeof item === "string") {
                  const href = item.toLowerCase().replace(" ", "-");
                  return (
                    <Link key={index} href={`#${href}`}>
                      <a className="uppercase text-us font-bold leading-4 text-text-300 hover:text-primary-500">
                        {item}
                      </a>
                    </Link>
                  );
                }
                return <Dropdown item={item} key={index} />;
              })}
            </div>
          </div>
          <div className="flex items-center space-x-9">
            <Link href="/login">
              <a className="uppercase text-text-300 text-us leading-4 font-bold hover:text-primary-500">
                Login
              </a>
            </Link>
            <StyledLink>Book Demo</StyledLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
