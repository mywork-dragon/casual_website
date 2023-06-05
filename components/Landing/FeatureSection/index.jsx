import React from "react";

const FeatureSection = ({ inverted, title, description, image }) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl px-5 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div
          className={`${
            inverted ? "flex-row-reverse" : "flex-row"
          } w-full flex justify-between items-center`}
        >
          <div className="max-w-334">
            {title}
            <p className="mt-6 font-lora text-base leading-6.5 text-text-100 font-normal">
              {description}
            </p>
          </div>
          <div>
            <img src={image} className="h-auto object-cover max-w-[562px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
