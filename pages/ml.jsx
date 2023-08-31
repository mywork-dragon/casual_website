import BuildShip from "@/components/BuildShip";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/MachineLearning/Hero";
import ProductTeam from "@/components/MachineLearning/ProductTeam";
import TechStack from "@/components/MachineLearning/TechStack";
import TextGraphic from "@/components/TextGraphic";
import Head from "next/head";
import React from "react";

const sections = [
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Model requirements <TextGraphic>defined in code</TextGraphic>
      </h2>
    ),
    description: `Accurate, well-structured data is a necessity for machine learning models.  Get everyone on the same page with Causal’s shared data model.  Define what data needs to flow in and out of your model, and keep it updated easily through your own revision control system.`,
    image: "/images/product/DefinedInCode.png",
  },

  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        <TextGraphic>Prevent</TextGraphic> breaking changes to your data pipelines 
      </h2>
    ),
    description: `Causal’s data model provides built-in data governance by preventing accidental changes to the front-end that damage inputs to ML models. Custom, typesafe SDKs ensure that no one on the team can break your pipelines.`,
    image: "/images/product/Typesafe.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
       Gather model inputs without burdening your front end
      </h2>
    ),
    description: `Causal's plug-in architecture makes it simple to incorporate any data source as an input to your models. Use data from any source you need, without having to pipe it through to your front end.`,
    image: "/images/Confidence.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        <TextGraphic>Stop</TextGraphic> cobbling together error-prone ETL processes
      </h2>
    ),
    description: `Causal gathers all the data needed for your model, passes it into the model, and passes the model responses back into your product. As that happens, it records all the data you need and delivers it to your data warehouse in exactly the format needed for training.  You get accurate data with zero production-training skew and no chance your model can “peek” into the future.`,
    image: "/images/OneSystem.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        A/B test new models <TextGraphic>without</TextGraphic> writing or releasing code
      </h2>
    ),
    description: `Causal's web tools make it easy for anyone to swap in new models, without needing to write or deploy new code. Anyone on the team can easily roll out a model, load test a new model by gradually increasing its traffic, or A/B test new models.`,
    image: "/images/product/Experiments.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Instantly <TextGraphic bottom="4px">reuse</TextGraphic> model inputs
      </h2>
    ),
    description: `Once you've set up a model input for one model, it can easily be reused in any other model. No additional data engineering effort is required.`,
    image: "/images/Experiment.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        Evaluate both model performance and <TextGraphic bottom="4px">business impact</TextGraphic>
      </h2>
    ),
    description: `Causal supports common ML performance metrics like NDCG and MRR out of the box.  It also allows you to monitor your models using business metrics, like revenue per user or user retention.`,
    image: "/images/product/Metrics.png",
  },
  {
    title: (
      <h2 className="font-extrabold text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 text-text-300">
        See features as your users do and release with confidence
      </h2>
    ),
    description: 
    `Causal's QA tools make it easy to view experimental versions of your app experience and make sure your tracking code is set up correctly before you roll it out. With Causal's Event Viewer, you can see how data will flow to your models.`,
    image: "/images/product/QA.png",
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
