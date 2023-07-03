import RoundedButton from "@/components/Button/Rounded";
import TextGraphic from "@/components/TextGraphic";
import React from "react";

const ProductTeam = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="text-center">
          <h2 className="font-bold font-inter text-2xl leading-8 sm:text-3xl md:text-4.5xl sm:leading-10 md:leading-11.5 text-text-300">
            Why product dev<br></br>
            teams <TextGraphic>love</TextGraphic> Causal
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-start mt-12 sm:mt-16 md:mt-24">
          <div className="relative">
            <img
              src="/images/productGraphic1.png"
              className="sm:max-w-sm h-auto object-cover"
            />
            <div className="absolute top-10 left-8">
              <p className="font-lora font-normal leading-6 text-xs sm:text-base text-text-300 -rotate-2">
                “Causal makes it easy to make good<br></br> decisions based on
                good data.”
              </p>
              <p className="font-bold mt-1 sm:mt-2 text-xs sm:text-base leading-6 text-text-300 -rotate-2">
                Bade Adebayo<br></br>
                Staff Software Engineer, Summari
              </p>
            </div>
            <div className="relative -top-4">
              <img
                src="/images/person1.png"
                className="max-w-[254px] h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative md:mt-36 md:-left-24">
            <img
              src="/images/productGraphic2.png"
              className="sm:max-w-sm h-auto object-cover z-10"
            />
            <div className="absolute top-12 left-6">
              <p className="font-lora font-normal leading-6 text-xs sm:text-base text-text-300 rotate-3 max-w-xs">
                Our front-end team needed some help with how to run experiments
                rigorously and [Causal] provides a framework, this is a huge
                win.”
              </p>
              <p className="font-bold mt-1 sm:mt-2 text-xs sm:text-base leading-6 text-text-300 rotate-3">
                Tony Deigh<br></br>
                Co-Founder & Chief Data Officer, Jobcase
              </p>
            </div>
            <div className="absolute -right-2 sm:-right-32 -top-20 z-[-1]">
              <img
                src="/images/person2.png"
                className="max-w-[254px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTeam;
