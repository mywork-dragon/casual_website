import RoundedButton from "@/components/Button/Rounded";
import { formatText } from "@/components/utils";
import { qb, useFeature } from "causal";
import React from "react";

const Hero = () => {
  const hero = useFeature(qb().getHero());

  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="lg:max-w-lg mt-8 sm:mt-24 lg:mt-0">
            <h1 className="uppercase text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
              {formatText(hero?.titleCopy)}
            </h1>
            <p className="font-lora lg:max-w-401 text-base leading-6 sm:text-lg sm:leading-6.5 text-text-100 font-normal mt-2 sm:mt-4">
              {hero?.subtitleCopy}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-10">
              <RoundedButton href="https://book.vimcal.com/p/christina/45minutes-0571c">
                {hero?.demoButtonCopy}
              </RoundedButton>
              <RoundedButton
                secondary
                href="https://tools.causallabs.io/signup"
              >
                {hero?.devSignUpButtonCopy}
              </RoundedButton>
            </div>
          </div>
          <div className="lg:max-w-xl">
            <img
              src="/images/hero.png"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
