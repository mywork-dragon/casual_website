import Banner from "@/components/Landing/Banner";
import FeatureSection from "@/components/Landing/FeatureSection";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import ProductTeam from "@/components/Landing/ProductTeam";
import Testimonial from "@/components/Landing/Testimonial";
import Layout from "@/components/Layout";
import TextGraphic from "@/components/TextGraphic";
import Head from "next/head";
import React from "react";

const sections = [
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        <TextGraphic>One system</TextGraphic> for your entire product dev team
      </h2>
    ),
    description: `Causal replaces your session tracking, feature management, and A/B
    testing tools into one integrated system so you can focus on your
    competitive advantage.`,
    image: "/images/OneSystem.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        <TextGraphic>Confidence</TextGraphic> in your data at scale
      </h2>
    ),
    description: `Building a product requires many moving parts. Your data will never look off because Causal uses an integrated data model.`,
    image: "/images/Confidence.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Experiment at <TextGraphic bottom="4px">high velocity</TextGraphic>
      </h2>
    ),
    description: `Product iteration needs to happen fast if you’re going to win. Run and analyze experiments rapidly and keep your team running efficiently on the most impactful things.`,
    image: "/images/Experiment.png",
  },
];

const LandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <Hero />
      <Testimonial />
      <div className="space-y-12 mt-12 sm:space-y-20 sm:mt-32">
        {sections.map((section, index) => {
          const inverted = index ? index % 2 !== 0 : false;
          return (
            <FeatureSection key={index} inverted={inverted} {...section} />
          );
        })}
      </div>
      <HowItWorks />
      <ProductTeam />
      <Banner />
    </Layout>
  );
};

export default LandingPage;
