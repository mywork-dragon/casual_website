import TextGraphic from "@/components/TextGraphic";
import React from "react";

const logos = [
  "Azure",
  "AWS",
  "GoogleCloud",
  "SnowFlake",
  "RedShift",
  "Looker",
  "Tableau",
];

const TechStack = () => {
  return (
    <div className="w-full mt-12 sm:mt-24 py-12 sm:pt-20 sm:pb-24 bg-secondary-500 relative flex justify-center items-center">
      <div className="hidden sm:block absolute -left-24 lg:left-0">
        <img
          src="/images/product/TechStack.png"
          className="max-w-[240px] h-auto object-cover"
        />
      </div>
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto flex flex-col items-center justify-center">
        <div className="text-center max-w-lg">
          <h2 className="text-text-300 text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 font-extrabold">
            <TextGraphic>We integrate</TextGraphic> with your existing tech
            stack
          </h2>
        </div>
        <div className="max-w-[606px] flex space-x-12 flex-wrap justify-center mt-8">
          {logos.map((logo, index) => (
            <img
              key={index + logo}
              style={{ maxWidth: logo === "AWS" ? "71px" : "" }}
              src={`/images/product/${logo}.png`}
              className="max-w-[120px] h-auto object-contain mt-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
