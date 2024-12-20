import TextGraphic from "@/components/TextGraphic";
import React from "react";

const ProductTeam = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="text-center">
          <h2 className="font-bold font-inter text-2xl leading-8 sm:text-3xl md:text-4.5xl sm:leading-10 md:leading-11.5 text-text-300">
            Why product dev<br></br>
            {" "}<TextGraphic>teams love</TextGraphic> Causal
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-start mt-12 sm:mt-16 md:mt-24">
          <div className="relative w-full flex flex-col md:items-end justify-end">
            <div className="flex items-start">
              <div className="w-full min-w-[375px] max-w-[375px] sm:min-w-[460px] sm:max-w-[460px] lg:-top-16 -left-6 md:left-24 relative flex items-center">
                <div className="absolute top-6 sm:-top-16 w-full md:static">
                  <img
                    src="/images/about/graphic1.png"
                    className="w-full object-contain h-auto"
                  />
                </div>
                <div className="absolute top-20 left-6 md:top-auto sm:left-10">
                  <p className="font-lora text-xs sm:text-base max-w-[300px] sm:max-w-[358px] text-text-300 leading-5 sm:leading-6 rotate-[5deg]">
                    “Causal makes it easy to make good decisions based on good
                    data.”
                  </p>
                  <p className="text-xs leading-5 sm:text-base sm:leading-6 font-bold text-text-300 mt-1 rotate-[5deg]">
                    Bade Adebayo<br></br> Staff Software Engineer, Summari
                  </p>
                </div>
              </div>
              <img
                src="/images/about/person1.png"
                className="max-w-[260px] h-auto object-cover"
              />
            </div>
            <div className="flex items-start self-start w-full justify-center relative -mt-24 sm:mt-12 md:mt-[-200px]">
              <img
                src="/images/about/person2.png"
                className="max-w-[260px] h-auto object-cover z-[-1]"
              />
              <div className="w-full min-w-[375px] max-w-[375px] sm:min-w-[500px] sm:max-w-[500px] z-1 md:-left-36 relative flex items-center">
                <div className="!w-full sm:!w-auto absolute md:static -left-32 -top-12 md:left-auto md:top-auto">
                  <img
                    src="/images/about/graphic2.png"
                    className="w-full object-contain h-auto"
                  />
                </div>
                <div className="absolute top-8 -left-20 sm:top-14 md:top-[102px] sm:-left-12 md:left-20">
                  <p className="font-lora text-xs leading-5 sm:text-base max-w-[280px] sm:max-w-[349px] text-text-300 sm:leading-6 rotate-[-10deg]">
                    We had four A/B testing platforms—none of which met our
                    needs—and I’ve been trying for years to unify them and solve
                    our problems across our stack. We’ve started eliminating
                    those other platforms and Causal has increased the velocity
                    of our experimentation.”
                  </p>
                  <p className="text-xs leading-5 sm:text-base ml-4 sm:leading-6 font-bold text-text-300 mt-1 rotate-[-10deg]">
                    Tony Deigh<br></br>
                    Co-Founder & Chief Data Officer, Jobcase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTeam;
