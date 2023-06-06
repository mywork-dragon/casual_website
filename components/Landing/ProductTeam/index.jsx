import RoundedButton from "@/components/Button/Rounded";
import React from "react";

const ProductTeam = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full max-w-7xl px-5 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-4.5xl leading-11.5 text-text-300">
            Why product<br></br>
            <u className="underline-offset-[1px] decoration-[#99F876]">
              teams love
            </u>{" "}
            Causal
          </h2>
        </div>
        <div className="w-full flex justify-center items-start mt-24">
          <div className="relative">
            <img
              src="/images/productGraphic1.png"
              className="max-w-sm h-auto object-cover"
            />
            <div className="absolute top-10 left-8">
              <p className="font-lora font-normal leading-6 text-base text-text-300 -rotate-2">
                “Causal makes it easy to make good<br></br> decisions based on
                good data.”
              </p>
              <p className="font-bold mt-2 text-base leading-6 text-text-300 -rotate-2">
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
          <div className="relative mt-36 -left-24">
            <img
              src="/images/productGraphic2.png"
              className="max-w-sm h-auto object-cover z-10"
            />
            <div className="absolute top-12 left-6">
              <p className="font-lora font-normal leading-6 text-base text-text-300 rotate-3 max-w-xs">
                Our front-end team needed some help with how to run experiments
                rigorously and [Causal] provides a framework, this is a huge
                win.”
              </p>
              <p className="font-bold mt-2 text-base leading-6 text-text-300 rotate-3">
                Tony Deigh<br></br>
                Co-Founder & Chief Data Officer, JobCase
              </p>
            </div>
            <div className="absolute -right-32 -top-20 z-[-1]">
              <img
                src="/images/person2.png"
                className="max-w-[254px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <h2 className="font-bold text-3.5xl text-text-300 leading-9">
            Build, ship and optimize consumer tech products<br></br>
            <u className="underline-offset-[1px] decoration-[#99F876]">
              without stitching together half a dozen tools
            </u>
          </h2>
          <div className="mt-10 flex justify-center items-center space-x-8">
            <RoundedButton>Book Demo</RoundedButton>
            <RoundedButton secondary>Try It Out</RoundedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTeam;
