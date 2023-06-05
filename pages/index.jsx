import FeatureSection from "@/components/Landing/FeatureSection";
import Hero from "@/components/Landing/Hero";
import Testimonial from "@/components/Landing/Testimonial";
import Layout from "@/components/Layout";
import React from "react";

const sections = [
  {
    title: (
      <h2 className="font-extrabold text-4.5xl leading-11.5 text-text-300">
        <u className="underline-offset-[1px] decoration-[#99F876]">
          One system
        </u>{" "}
        for your entire product dev team
      </h2>
    ),
    description: `Causal replaces your session tracking, feature management, and A/B
    testing tools into one integrated system so you can focus on your
    competitive advantage.`,
    image: "/images/OneSystem.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-4.5xl leading-11.5 text-text-300">
        <u className="underline-offset-[1px] decoration-[#99F876]">
          Confidence
        </u>{" "}
        in your data at scale
      </h2>
    ),
    description: `Building a product requires many moving parts. Your data will never look off because Causal uses an integrated data model.`,
    image: "/images/Confidence.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-4.5xl leading-11.5 text-text-300">
        <u className="underline-offset-[1px] decoration-[#99F876]">
          Experiment
        </u>{" "}
        at high velocity
      </h2>
    ),
    description: `Product iteration needs to happen fast if you’re going to win. Run and analyze experiments rapidly and keep your team running efficiently on the most impactful things.`,
    image: "/images/Experiment.png",
  },
];

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <Testimonial />
      <div className="space-y-20 mt-32">
        {sections.map((section, index) => {
          const inverted = index ? index % 2 !== 0 : false;
          return (
            <FeatureSection key={index} inverted={inverted} {...section} />
          );
        })}
      </div>
    </Layout>
  );
};

export default LandingPage;
