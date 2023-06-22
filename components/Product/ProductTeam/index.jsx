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
          <div className="relative max-w-401 lg:max-w-none">
            <div className="absolute left-48 -top-16 md:top-0 md:left-12">
              <img
                src="/images/product/Spaceship.png"
                className="max-w-[124px] h-auto object-cover"
              />
            </div>
            <div className="relative top-[280px] sm:top-56 md:top-52 sm:left-28 md:left-44">
              <img
                src="/images/product/productGraphic3.png"
                className="sm:max-w-lg h-auto object-cover"
              />
            </div>
            <div className="absolute top-[360px] left-12 sm:top-24 sm:left-48 md:top-[300px] md:left-64 w-full max-w-[240px] sm:max-w-350">
              <p className="font-lora font-normal leading-3 sm:leading-6 text-xs sm:text-base text-text-300 -rotate-2">
                We had four A/B testing platforms—none of which met our
                needs—and I’ve been trying for years to unify them and solve our
                problems across our stack. We’ve started eliminating those other
                platforms and Causal has increased the velocity of our
                experimentation.”
              </p>
              <p className="font-bold mt-1 sm:mt-2 text-xs sm:text-base leading-3 sm:leading-6 text-text-300 -rotate-2">
                Tony Deigh<br></br>
                Co-Founder & Chief Data Officer, JobCase
              </p>
            </div>
            <div className="relative -top-56 sm:top-[-420px] -left-24 md:left-auto md:-top-56 z-[-1]">
              <img
                src="/images/product/person3.png"
                className="max-w-xs h-auto object-contain z-[-1]"
              />
            </div>
          </div>
          <div className="relative -mt-12 sm:-mt-72 md:mt-0 md:-left-24">
            <img
              src="/images/product/productGraphic4.png"
              className="sm:max-w-lg h-auto object-cover z-10"
            />
            <div className="absolute top-8 left-8">
              <p className="font-lora font-normal leading-4 sm:leading-6 text-xs sm:text-base text-text-300 rotate-6 max-w-[240px] sm:max-w-xs">
                With Causal, I don’t have to worry about the data being off. So
                I can be more productive around new things to implement and not
                have doubts around pushing out experiments.”
              </p>
              <p className="font-bold mt-1 sm:mt-2 text-xs sm:text-base leading-3 sm:leading-6 text-text-300 rotate-6">
                Bade Adebayo<br></br>
                Staff Software Engineer, Summari
              </p>
            </div>
            <div className="hidden sm:block absolute -right-2 sm:-right-56 top-16 z-[-1]">
              <img
                src="/images/product/person4.png"
                className="max-w-xs h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTeam;
