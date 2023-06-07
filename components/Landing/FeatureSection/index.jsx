import React from "react";

const FeatureSection = ({ inverted, title, description, image }) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div
          className={`${
            inverted ? "lg:flex-row-reverse" : "lg:flex-row"
          } w-full flex flex-col justify-between items-center`}
        >
          <div className="lg:max-w-350">
            {title}
            <p className="mt-2 sm:mt-6 font-lora text-sm leading-5 sm:text-base sm:leading-6.5 text-text-100 font-normal">
              {description}
            </p>
          </div>
          <div>
            <img src={image} className="h-auto object-cover lg:max-w-[562px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
