import React, { useEffect } from "react";
import Link from "next/link";

const Dropdown = ({ item, active, setActive, index }) => {
  const { name, options } = item;
  const openDropdown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (index === active) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };

  const closeDropdown = () => {
    setActive(-1);
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);
  return (
    <div
      className="relative flex"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button className="uppercase font-inter transition-all duration-300 text-us font-bold leading-4 text-text-300 cursor-pointer inline-flex items-center">
        {name}
        <span className="ml-2">
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4.5 5L8 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      {active === index && (
        <div className="absolute w-full left-0 top-4 bg-white shadow-nav rounded-md flex flex-col min-w-[200px] py-[8px] px-[16px]">
          {options.map((option, index) => {
            if (option?.href?.startsWith("/")) {
              return (
                <Link key={index} href={option.href}>
                  <a className="font-inter uppercase text-us font-bold py-[8px] leading-4 text-text-300 hover:text-primary-500 whitespace-nowrap">
                    {option.name}
                  </a>
                </Link>
              );
            }
            return (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noreferrer"
                className="font-inter uppercase text-us font-bold py-[8px] leading-4 text-text-300 hover:text-primary-500 whitespace-nowrap"
              >
                {option.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
