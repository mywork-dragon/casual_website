import React from "react";

const Banner = () => {
  return (
    <div className="w-full mt-24 relative top-16">
      <div className="w-full max-w-7xl px-5 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full relative flex justify-center items-center">
          <img
            src="/images/footerBanner.png"
            className="max-w-5xl h-auto object-cover"
          />
          <div className="absolute">
            <p className="text-center max-w-lg font-lora font-normal text-lg text-text-300">
              Get the latest tips on how to build, ship and optimize your
              consumer tech products, delivered straight to your inbox.
            </p>
            <div className="h-[50px] bg-white p-0.5 pl-8 mt-8 rounded-[53px] shadow-input flex items-center justify-between">
              <div className="w-full mr-4">
                <input
                  className="bg-transparent w-full font-lora font-normal text-15 leadin-6"
                  placeholder="Your email goes here"
                />
              </div>
              <button className="h-full px-6 uppercase hover:opacity-80 transition-all duration-300 text-white bg-text-300 tracking-wide font-bold text-xs leading-4 rounded-[53px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
