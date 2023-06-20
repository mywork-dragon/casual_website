import TextGraphic from "@/components/TextGraphic";
import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div
          style={{ backgroundImage: "url(/images/quote.png)" }}
          className="w-full bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center"
        >
          <div className="mt-2 sm:mt-4 max-w-3.5xl flex items-center flex-col">
            <p className="font-lora text-text-100 text-base leading-6 sm:text-lg sm:leading-6.5 text-center font-normal">
              “We had four A/B testing platforms—none of which met our needs—and
              I’ve been trying for years to unify them and solve our problems
              across our stack. We’ve started eliminating those other platforms
              and Causal has increased the velocity of our experimentation.”
            </p>
            <div className="rounded-full mt-4 flex items-center">
              <img
                src="/images/TonyDeigh.png"
                className="h-auto object-cover w-20 rounded-full"
              />
              <div className="flex flex-col items-start text-left">
              <p className="text-lg mb-2.5 leading-6.5 text-text-300 text-center underline-offset-[2px] decoration-[#99F876] underline font-bold">
                <TextGraphic height="12px" bottom="1px">
                  Tony Deigh
                </TextGraphic>
              </p>
              <p className="text-lg leading-6.5 text-text-300 text-left font-bold">
                Co-Founder & Chief Data Officer, <br />JobCase
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
