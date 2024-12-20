import RoundedButton from "@/components/Button/Rounded";
import TextGraphic from "@/components/TextGraphic";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="lg:max-w-lg mt-8 sm:mt-24 lg:mt-0">
            <h1 className="uppercase text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
            MODEL OPTIMIZATION{" "}
              <TextGraphic>IN A BOX</TextGraphic> FOR<br /> 
              DATA OBSESSED TEAMS
            </h1>
            <p className="font-lora lg:max-w-lg text-base leading-6 sm:text-lg sm:leading-6.5 text-text-100 font-normal mt-2 sm:mt-4">
            Collect high quality training data from your product at scale, over time. Roll out new models to customers quickly, without deploying new code. Evaluate your model's performance and its impact on your business

            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-10">
              <RoundedButton href="https://book.vimcal.com/p/christina/45minutes-0571c">
                Book Demo
              </RoundedButton>
              <RoundedButton
                secondary
                href="https://tools.causallabs.io/signup"
              >
                Try It Out
              </RoundedButton>
            </div>
          </div>
          <div className="lg:max-w-xl">
            <img
              src="/images/product/hero.png"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
