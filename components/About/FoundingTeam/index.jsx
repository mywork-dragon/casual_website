import TextGraphic from "@/components/TextGraphic";
import React from "react";

const FoundingTeam = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto flex flex-col items-center">
        <h2 className="text-text-300 text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 font-extrabold">
          Our <TextGraphic>Founding Team</TextGraphic>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 sm:!mt-6 md:!mt-10 lg:!mt-14">
          <div className="flex">
            <img
              src="/images/about/Alex.png"
              className="max-w-[186px] h-auto object-cover mt-12"
            />
            <div className="text-center relative -left-16">
              <h3 className="font-bold uppercase text-xl leading-6 text-text-300">
                ALEX MAY
              </h3>
              <p className="text-text-100 font-lora font-normal text-sm leading-4 text-center">
                Co-Founder and VP Engineering<br></br>Ex-TripAdvisor
              </p>
            </div>
          </div>
          <div className="flex items-end justify-center">
            <img
              src="/images/about/logo.png"
              className="max-w-[282px] h-auto object-cover"
            />
          </div>
          <div className="flex flex-row-reverse mt-6 lg:mt-0">
            <img
              src="/images/about/Christina.png"
              className="max-w-[186px] h-auto object-cover mt-12"
            />
            <div className="text-center relative left-16">
              <h3 className="font-bold text-xl uppercase leading-6 text-text-300 whitespace-nowrap">
                Christina Pawlikowski
              </h3>
              <p className="text-text-100 font-lora font-normal text-sm leading-4 text-center">
                Co-Founder and CEO<br></br>Ex-TripAdvisor
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-auto justify-between items-center">
          <div className="flex mt-4 sm:!mt-8 md:!mt-12 lg:!mt-20 flex-row-reverse">
            <img
              src="/images/about/Jeff.png"
              className="max-w-[186px] h-auto object-cover mt-12"
            />
            <div className="text-center relative left-16">
              <h3 className="font-bold uppercase text-xl leading-6 text-text-300">
                Jeff Palmucci
              </h3>
              <p className="text-text-100 font-lora font-normal text-sm leading-4 text-center">
                Co-Founder and CTO<br></br>
                Ex-TripAdvisor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingTeam;
