import Link from "next/link";
import React, { useState, useEffect } from "react";

const Dropdown = ({ item }) => {
  const { name, options } = item;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="uppercase transition-all duration-300 text-us font-bold leading-4 text-text-300 cursor-pointer inline-flex items-center hover:text-primary-500"
      >
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
      {isDropdownOpen && (
        <div className="absolute w-full left-0 top-10 bg-white shadow-nav rounded-md flex flex-col py-3 min-w-[200px] px-4 space-y-4">
          {options.map((option, index) => {
            const href = option.toLowerCase().replace(" ", "-");
            return (
              <Link key={index} href={`#${href}`}>
                <a className="uppercase text-us font-bold leading-4 text-text-300 hover:text-primary-500 whitespace-nowrap">
                  {option}
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;