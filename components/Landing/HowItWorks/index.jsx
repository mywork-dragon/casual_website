import RoundedButton from "@/components/Button/Rounded";
import TextGraphic from "@/components/TextGraphic";
import React from "react";

const steps = [
  `Create schemas for your product features that specify what data needs to flow in and out`,
  {
    title: "Causal’s compiler uses those schemas to generate:",
    list: [
      "APIs & SDKs that are typesafe and custom to your schemas",
      "data pipelines and ETLs that automatically organize and deliver your product data",
      "web tools for feature flagging and experimentation",
    ],
  },
  `All your product optimization tools are integrated through a shared data model`,
];

const cards = [
  {
    title: "Feature schema defined in code",
    image: "/images/feature1.png",
  },
  {
    title: "Easily design and launch experiments",
    image: "/images/feature2.png",
  },
  {
    title: "Typesafe SDKs specific to your tracking plan",
    image: "/images/feature3.png",
  },
  {
    title: "Automatic data pipelines and ETLs",
    image: "/images/feature4.png",
  },
  {
    title: "QA tools",
    image: "/images/feature5.png",
  },
  {
    title: "Define new or use existing metrics",
    image: "/images/feature6.png",
  },
  {
    title: "Feature cleanup system",
    image: "/images/feature7.png",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full mt-12 sm:mt-24 py-12 sm:pt-20 sm:pb-24 bg-secondary-500">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="text-center">
          <h2 className="text-text-300 text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 font-extrabold">
            So how does this <TextGraphic>actually work</TextGraphic>?
          </h2>
        </div>
        <div className="w-full mt-12 sm:mt-24">
          <div className="w-full flex flex-col-reverse justify-between items-start lg:flex-row-reverse">
            <div className="mt-12 lg:mt-0 lg:max-w-401 flex flex-col items-start space-y-5">
              {steps.map((step, index) => {
                if (typeof step === "string") {
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <img
                        src={`/images/list${index + 1}.png`}
                        className="w-6 sm:w-8 h-auto object-cover"
                      />
                      <p className="font-lora text-sm sm:text-base leading-5 sm:leading-6.5 text-text-300 font-normal">
                        {step}
                      </p>
                    </div>
                  );
                }
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <img
                      src={`/images/list${index + 1}.png`}
                      className="w-6 sm:w-8 h-auto object-cover"
                    />
                    <div>
                      <p className="font-lora text-sm sm:text-base leading-5 sm:leading-6.5 text-text-300 font-normal">
                        {step.title}
                      </p>
                      <ul className="list-disc pl-4">
                        {step.list.map((list, subIndex) => (
                          <li
                            className="font-lora text-sm sm:text-base leading-5 sm:leading-6.5 text-text-300 font-normal"
                            key={index + "" + subIndex}
                          >
                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
              <div className="!mt-12">
                <RoundedButton href="/product">Learn More</RoundedButton>
              </div>
            </div>
            <div>
              <img
                src={"/images/howItWorks.png"}
                className="h-auto object-cover lg:max-w-[619px]"
              />
            </div>
          </div>
          <div className="w-full mt-12 sm:mt-20">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
              <div className="lg:max-w-334 self-start">
                <h2 className="font-extrabold text-2xl leading-7 sm:text-4.5xl sm:leading-11.5 text-text-300">
                  Features for <TextGraphic>everyone</TextGraphic> on the
                  product team
                </h2>
                <p className="mt-2 sm:mt-6 font-lora text-sm leading-5 sm:text-base sm:leading-6.5 text-text-100 font-normal">
                  Everything you need to build, ship and optimize your consumer
                  tech products without bugging engineering.
                </p>
                <div className="mt-6 sm:mt-12">
                  <RoundedButton href="/product">LEARN MORE</RoundedButton>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="mt-12 sm:mt-24 lg:mt-0 grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-white shadow-card !pl-5 pr-10 md:max-w-xs min-w-[318px] !pb-8 rounded-md md:rotate-1">
                    <div className="relative -top-5">
                      <img
                        src={cards[0].image}
                        className="w-16 h-auto object-cover"
                      />
                    </div>
                    <p className="font-lora leading-6 text-base text-text-300">
                      {cards[0].title}
                    </p>
                  </div>
                  <div className="bg-white shadow-card !pl-5 !mt-7 md:!mt-0 md:ml-6 pr-10 md:max-w-xs min-w-[318px] !pb-8 rounded-md md:-rotate-1">
                    <div className="relative -top-1.5">
                      <img
                        src={cards[1].image}
                        className="w-16 h-auto object-cover"
                      />
                    </div>
                    <p className="font-lora leading-6 text-base text-text-300">
                      {cards[1].title}
                    </p>
                  </div>
                  <div className="bg-white shadow-card !pl-5 !mt-7 pr-10 md:max-w-xs min-w-[318px] !pb-8 rounded-md md:rotate-2">
                    <div className="relative -top-5">
                      <img
                        src={cards[2].image}
                        className="w-16 h-auto object-cover"
                      />
                    </div>
                    <p className="font-lora leading-6 text-base text-text-300">
                      {cards[2].title}
                    </p>
                  </div>
                  <div className="bg-white shadow-card !pl-5 md:ml-6 !mt-7 pr-10 md:max-w-xs min-w-[318px] !pb-8 rounded-md md:rotate-[-0.5deg]">
                    <div className="relative -top-5">
                      <img
                        src={cards[3].image}
                        className="w-16 h-auto object-cover"
                      />
                    </div>
                    <p className="font-lora leading-6 text-base text-text-300">
                      {cards[3].title}
                    </p>
                  </div>
                  <div className="bg-white shadow-card !pl-5 !mt-7 pr-10 md:max-w-xs min-w-[318px] !pb-8 rounded-md md:rotate-[0.5deg]">
                    <div className="relative -top-5">
                      <img
                        src={cards[4].image}
                        className="w-16 h-auto object-cover"
                      />
                    </div>
                    <p className="font-lora leading-6 text-base text-text-300">
                      {cards[4].title}
                    </p>
                  </div>
                  <div className="bg-white shadow-card !pl-5 md:ml-6 !mt-7 pr-10 md:max-w-xs min-w-[318px] !pb-8 rounded-md md:rotate-[0.5deg]">
                    <div className="relative -top-5">
                      <img
                        src={cards[5].image}
                        className="w-16 h-auto object-cover"
                      />
                    </div>
                    <p className="font-lora leading-6 text-base text-text-300">
                      {cards[5].title}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-auto">
                  <div className="bg-white shadow-card !pl-5 md:ml-6 !mt-7 pr-10 w-full md:max-w-xs min-w-[318px] !pb-8 rounded-md md:rotate-[0.5deg]">
                    <div className="relative -top-5">
                      <img
                        src={cards[6].image}
                        className="w-16 h-auto object-cover"
                      />
                    </div>
                    <p className="font-lora leading-6 text-base text-text-300">
                      {cards[6].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
