import BuildShip from "@/components/BuildShip";
import ProductTeam from "@/components/About/ProductTeam";
import Hero from "@/components/About/Hero";
import Head from "next/head";
import React from "react";
import Description from "@/components/About/Description";
import FoundingTeam from "@/components/About/FoundingTeam";
import Investors from "@/components/About/Investors";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <Hero />
      <Description />
      <FoundingTeam />
      <Investors />
      <ProductTeam />
      <BuildShip about />
    </>
  );
};

export default AboutPage;
