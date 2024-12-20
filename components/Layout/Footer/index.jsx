import React from "react";
import Link from "next/link";

const footerItems = [
  [
    {
      name: "Experimentation",
      href: "/experimentation",
    },
    {
      name: "Machine Learning",
      href: "/ml",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    // "Careers"
  ],
  [
    {
      name: "DOCS",
      href: "https://tech.causallabs.io/",
    },
    {
      name: "BLOG",
      href: "/blog",
    },
    {
      name: "Case Studies",
      href: "/case-study",
    },
  ],
  [
    {
      name: "Sign In",
      href: "https://tools.causallabs.io/",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
  ],
];

const Footer = () => {
  return (
    <footer className="w-full shadow-nav bg-white mt-32 sm:mt-0 pb-8 sm:pb-24">
      <div className="w-full max-w-5xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="flex w-full flex-col md:flex-row justify-between md:items-end min-h-[96px]">
          <div className="flex items-end space-x-5 sm:space-x-20">
            {footerItems.map((item, index) => (
              <div className="flex flex-col items-start" key={index}>
                {item.map((subItem, subIndex) => {
                  if (subItem?.href?.startsWith("/")) {
                    return (
                      <Link key={subItem + "" + subIndex} href={subItem.href}>
                        <a className="font-bold font-inter text-xxs py-2 leading-4.5 uppercase text-text-300 hover:text-primary-500">
                          {subItem.name}
                        </a>
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={subItem + "" + subIndex}
                      target="_blank"
                      rel="noreferrer"
                      href={subItem.href}
                      className="font-bold font-inter text-xxs py-2 leading-4.5 uppercase text-text-300 hover:text-primary-500"
                    >
                      {subItem.name}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-0">
            <a
              href="https://www.linkedin.com/company/causal-labs/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/linkedin.png"
                className="w-[58px] h-auto object-cover"
              />
            </a>
          </div>
          <div className="mt-8 md:mt-0 text-center md:text-left">
            <p className="font-bold text-xxs leading-4.5 uppercase text-text-300 ">
              ©2023 Causal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
