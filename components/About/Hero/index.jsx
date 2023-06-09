import RoundedButton from "@/components/Button/Rounded";
import TextGraphic from "@/components/TextGraphic";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="lg:max-w-2xl mt-8 sm:mt-24 lg:mt-0">
            <h1 className="uppercase lg:max-w-xl text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
              The process to <TextGraphic>build, ship and optimize</TextGraphic>{" "}
              consumer tech products is broken
            </h1>
            <p className="font-lora lg:max-w-xl text-base leading-6 sm:text-lg sm:leading-6.5 text-text-100 font-normal mt-2 sm:!mt-4 lg:!mt-8">
              Product dev teams are stitching together half a dozen tools (or
              doing some of it themselves) when they build, ship and optimize
              consumer-facing products. The result? There’s no unification
              across the stack, so it’s hard to ship new features and evaluate
              if those features are actually driving the business.
              <br />
              <br />
              What’s more,engineering teams are dealing with poorly defined and
              unstructured data in their data warehouses. When the data looks
              off, they need to allocate time to look into it which means they
              become less productive. Sometimes there’s more than one person
              dedicated to the data cleanup process - there’s an entire team
              involved!
            </p>
          </div>
          <div className="lg:max-w-lg">
            <img
              src="/images/about/hero.png"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="font-lora text-base leading-6 sm:text-lg sm:leading-6.5 text-text-100 font-normal mt-2 sm:!mt-4 lg:!mt-8">
            The data only matters if it’s helping you decide if what you’re
            building is useful. What’s the impact of the features that you’re
            shipping? What’s the impact of the experiments that you’re running?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
