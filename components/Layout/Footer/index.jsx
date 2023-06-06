import React from "react";
import Link from "next/link";

const footerItems = [
  ["Product", "About", "Contact", "Careers"],
  ["Docs", "Blog", "Case Studies"],
  ["Privacy Policy"],
];

const Footer = () => {
  return (
    <footer className="w-full shadow-nav bg-white pb-24">
      <div className="w-full max-w-5xl px-5 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="flex w-full justify-between items-end">
          <div className="flex items-end space-x-20">
            {footerItems.map((item, index) => (
              <div className="flex flex-col items-start space-y-2" key={index}>
                {item.map((subItem, subIndex) => (
                  <Link
                    key={subItem + "" + subIndex}
                    href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                  >
                    <a className="font-bold text-xxs leading-4.5 uppercase text-text-300 hover:text-primary-500">
                      {subItem}
                    </a>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div>
            <img
              src="/images/linkedin.png"
              className="w-[58px] h-auto object-cover"
            />
          </div>
          <div>
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
