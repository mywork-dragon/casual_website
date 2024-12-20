import TextGraphic from "@/components/TextGraphic";
import React from "react";

const Investors = () => {
  return (
    <div className="w-full mt-12 sm:mt-24 py-12 sm:pt-20 sm:pb-24 bg-secondary-500">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
          <div
            style={{ backgroundImage: "url(/images/about/investorsBg.png)" }}
            className="flex flex-col lg:flex-row items-center lg:space-x-6 bg-no-repeat bg-center lg:bg-left bg-contain w-full md:w-[64%]"
          >
            <div className="flex flex-col items-center w-full lg:max-w-[288px] space-y-5">
              <div className="bg-white max-w-[288px] lg:max-w-none shadow-card flex justify-center items-center rounded-xl w-full py-10 rotate-1">
                <img
                  src="/images/about/pear.png"
                  className="max-w-[131px] w-full h-auto object-cover rotate-1"
                />
              </div>
              <div className="bg-white max-w-[288px] lg:max-w-none shadow-card flex justify-center items-center rounded-xl w-full py-10 -rotate-1">
                <img
                  src="/images/about/186.png"
                  className="max-w-[91px] w-full h-auto object-cover -rotate-1"
                />
              </div>
            </div>
            <div className="w-full !mt-5 lg:!mt-0 max-w-[288px]">
              <div className="bg-white shadow-card flex justify-center items-center rounded-xl w-full py-10 -rotate-1">
                <img
                  src="/images/about/founder.png"
                  className="max-w-[167px] w-full h-auto object-cover -rotate-1"
                />
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-text-300 lg:text-left whitespace-nowrap text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 font-extrabold">
              Our <TextGraphic>Investors</TextGraphic>
            </h2>
            <p className="max-w-md lg:text-left font-lora text-base font-normal text-text-100 leading-6 !mt-4">
              Causal is backed by Pear, Founder Collective and 186 Ventures with
              notable angels including founders and executives from Tableau,
              Adobe and Flywire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
