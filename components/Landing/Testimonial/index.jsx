import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full max-w-7xl px-5 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div
          style={{ backgroundImage: "url(/images/quote.png)" }}
          className="w-full bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center"
        >
          <div className="rounded-full">
            <img
              src="/images/TonyDeigh.png"
              className="h-auto object-cover w-20 rounded-full"
            />
          </div>
          <div className="mt-4 max-w-3.5xl">
            <p className="font-lora text-text-100 text-lg leading-6.5 text-center font-normal">
              “We had 4 A/B testing platforms—none of which met our needs—and
              I’ve been trying for years to unify them and solve our problems
              across our stack. We’ve started eliminating those other platforms
              and Causal has increased the velocity of our experimentation.”
            </p>
            <p className="text-lg leading-6.5 text-text-300 text-center mt-4 underline-offset-[2px] decoration-[#99F876] underline font-bold">
              Tony Deigh
            </p>
            <p className="text-lg leading-6.5 text-text-300 text-center font-bold">
              Co-Founder & Chief Data Officer, JobCase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
