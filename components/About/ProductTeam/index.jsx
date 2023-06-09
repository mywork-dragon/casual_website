import TextGraphic from "@/components/TextGraphic";
import React from "react";

const ProductTeam = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-2xl leading-8 sm:text-3xl md:text-4.5xl sm:leading-10 md:leading-11.5 text-text-300">
            Why product dev<br></br>
            teams <TextGraphic>love</TextGraphic> Causal
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-start mt-12 sm:mt-16 md:mt-24">
          <div className="relative w-full flex justify-end">
            <div>
              <img
                src="/images/about/person1.png"
                className="max-w-[260px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTeam;
