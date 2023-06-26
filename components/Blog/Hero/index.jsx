import TextGraphic from "@/components/TextGraphic";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-12 z-10">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto z-10">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center z-10">
          <div className="lg:max-w-lg mt-8 sm:mt-24 lg:mt-0">
            <h1 className="uppercase text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
              Causal <TextGraphic>Blog</TextGraphic>
            </h1>
            <p className="font-lora lg:max-w-401 text-base leading-6 sm:text-lg sm:leading-6.5 text-text-100 font-normal mt-2 sm:mt-4">
              Updates on the company, our products, and the things we're thinking about.
            </p>
          </div>
          <div className="lg:max-w-2xl z-10">
            <img
              src="/images/blog/hero.png"
              className="w-full h-auto object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
