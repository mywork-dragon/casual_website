import RoundedButton from "@/components/Button/Rounded";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full max-w-7xl px-5 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex justify-between items-center">
          <div className="max-w-lg">
            <h1 className="uppercase text-4.5xl font-extrabold leading-12.5 text-text-300">
              Product optimization{" "}
              <u className="uppercase underline-offset-[1px] decoration-[#99F876]">
                in a box
              </u>{" "}
              for<br></br>data obsessed teams
            </h1>
            <p className="font-lora max-w-401 text-lg leading-6.5 text-text-100 font-normal mt-4">
              Stop stitching together half a dozen tools. The most comprehensive
              session tracking, feature management, and experimentation
              software.
            </p>
            <div className="mt-10 flex items-center space-x-10">
              <RoundedButton>Book Demo</RoundedButton>
              <RoundedButton secondary>Try It Out</RoundedButton>
            </div>
          </div>
          <div className="max-w-xl">
            <img
              src="/images/hero.png"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
