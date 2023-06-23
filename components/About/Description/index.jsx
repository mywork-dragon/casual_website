import TextGraphic from "@/components/TextGraphic";
import React from "react";

const Description = () => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto flex flex-col items-center">
        <div className="text-center max-w-4xl">
          <p className="text-2xl font-bold text-text-300 italic">
            Instead of spending time cleaning up messy data, teams should be
            spending time on things that will{" "}
            <span className="sm:hidden">
              create a <TextGraphic>competitive advantage</TextGraphic>
            </span>
            <span className="hidden sm:inline-block">
              <TextGraphic>create a competitive advantage</TextGraphic>
            </span>{" "}
            for the company.
          </p>
        </div>
        <div className="w-full">
          <p className="font-lora !text-center lg:!text-left text-lg leading-7 text-text-100 mt-3 sm:!mt-5 lg:!mt-10">
            Causal’s founding team hails from TripAdvisor, the world's largest
            travel guidance platform and data-oriented company that iterates
            rapidly to improve their products. At TripAdvisor, we spent an
            enormous amount of time trying to get the data into the right
            format. It was really hard to maintain good, clean data and over
            time the data got messier in our data warehouse. We also spent a lot
            of time building and launching A/B tests, but it was frustrating to
            be doing that work and not knowing whether it was pushing the
            business forward.
          </p>
        </div>
        <div className="text-center max-w-4xl mt-3 sm:!mt-5 lg:!mt-10">
          <p className="text-2xl font-bold text-text-300 italic">
            These are problems that we’re very familiar with, and quite frankly,
            we had enough. <TextGraphic>So we built Causal</TextGraphic>.
          </p>
        </div>
        <div className="w-full">
          <p className="font-lora !text-center lg:!text-left text-lg leading-7 text-text-100 mt-3 sm:!mt-5 lg:!mt-10">
          It should be possible for any product dev team to build, ship and optimize products that have a real impact on the business. You deserve to know that you’re building stuff that matters to your customers. You should have a system that lets you run experiments and evaluate if it’s driving the business (or not). And everyone on the product dev team (engineering, product, analytics) should be able to see the same data and work off of the same tools. A process that used to be broken, but not anymore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
