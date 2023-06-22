import React from "react";
import TextGraphic from "../TextGraphic";
import RoundedButton from "../Button/Rounded";

const BuildShip = ({ about = false }) => {
  let spacingStyles = "mt-44 sm:mt-56 md:mt-16";
  if (about) {
    spacingStyles = "!mt-4 md:!mt-16";
  }
  return (
    <div className={`text-center ${spacingStyles}`}>
      <h2 className="font-bold font-inter text-sm leading-5 sm:text-2xl md:text-3xl lg:text-3.5xl text-text-300 sm:leading-9">
        Build, ship and optimize consumer tech products<br></br>
        <TextGraphic>without stitching together half a dozen tools</TextGraphic>
      </h2>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
        <RoundedButton href="https://book.vimcal.com/p/christina/45minutes-0571c">
          Book Demo
        </RoundedButton>
        <RoundedButton secondary href="https://tools.causallabs.io/signup">
          Try It Out
        </RoundedButton>
      </div>
    </div>
  );
};

export default BuildShip;
