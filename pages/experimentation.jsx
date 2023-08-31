import BuildShip from "@/components/BuildShip";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Experimentation/Hero";
import ProductTeam from "@/components/Experimentation/ProductTeam";
import TechStack from "@/components/Experimentation/TechStack";
import TextGraphic from "@/components/TextGraphic";
import Head from "next/head";
import React from "react";

const sections = [
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Feature schema <TextGraphic>defined in code</TextGraphic>
      </h2>
    ),
    description: `Poorly defined and unstructured data slows product teams down. Get everyone on the same page with Causal’s shared data model. Schemas are easy to create and update as your product changes since they use a familiar language and live in your revision control system.`,
    cta: {
      name: "READ THE DOCS",
      href: "https://tech.causallabs.io/docs/fdl/intro/",
    },
    image: "/images/product/DefinedInCode.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Easily design and launch <TextGraphic>experiments</TextGraphic>
      </h2>
    ),
    description: `It’s just plain hard to design, run, and learn from experiments. Which features are actually driving the business? Launch experiments, analyze results, and roll out changes without changing any code. Product managers and data scientists can test and iterate quickly without having to rely on engineers.`,
    image: "/images/product/Experiments.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        <TextGraphic bottom="4px">Typesafe</TextGraphic> SDKs
      </h2>
    ),
    description: `Errors happen, even with the best intentions. Custom, typesafe SDKs specific to your feature schema help you find and fix tracking code errors at compile time before they’re ever committed.`,
    image: "/images/product/Typesafe.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        <TextGraphic bottom="4px">Automatic</TextGraphic> data pipelines and
        ETLs
      </h2>
    ),
    description: `Causal’s data pipelines and ETLs organize your data and deliver it to your data warehouse. Once a feature is defined, Causal automatically creates the tables needed to store the impression and event data for the feature and generates the ETLs necessary to populate these tables. As you change your data definition, Causal automatically keeps your data warehouse up to date.`,
    image: "/images/product/Automatic.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        <TextGraphic bottom="4px">QA tools</TextGraphic>
      </h2>
    ),
    description: `Experience features the same way that your users experience them and make sure your tracking code is set up correctly before you roll it out. With Causal’s Event Viewer, you can see what data will flow through your system so you understand what data you’re capturing.`,
    image: "/images/product/QA.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Define new or use existing{" "}
        <TextGraphic bottom="4px">metrics</TextGraphic>
      </h2>
    ),
    description: `Data analysts can define company metrics, creating a company-wide view of how experiments perform to see if they’re moving the business forward. Create completely new metrics or build off of what already exists in your data warehouse. It’s totally up to you.`,
    image: "/images/product/Metrics.png",
    cta: {
      name: "READ THE DOCS",
      href: "https://tech.causallabs.io/docs/data-warehouse/metrics/",
    },
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Feature <TextGraphic bottom="4px">cleanup</TextGraphic> system
      </h2>
    ),
    description: `Give your entire product team visibility around which features are live and which have been deprecated. Causal marks the relevant code as deprecated and engineers’ IDEs and developer tools will flag that code accordingly. Engineers can remove the obsolete feature without leaving their IDE rather than having to hunt through JIRA tickets or guess at whether the code is obsolete.`,
    image: "/images/product/Cleanup.png",
  },
];

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <Hero />
      <div className="space-y-12 mt-12 sm:space-y-20 sm:mt-32">
        {sections.map((section, index) => {
          const inverted = index ? index % 2 !== 1 : true;
          return (
            <FeatureSection
              largeImage
              wideText
              key={index}
              inverted={inverted}
              {...section}
            />
          );
        })}
      </div>
      <TechStack />
      <ProductTeam />
      <div className="-mt-24 sm:mt-0">
        <BuildShip />
      </div>
    </>
  );
};

export default ProductPage;
