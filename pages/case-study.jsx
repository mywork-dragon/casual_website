import CaseStudyLandingHero from "@/components/CaseStudy/Landing/Hero";
import CaseStudies from "@/components/CaseStudy/Landing/CaseStudies";
import BuildShip from "@/components/BuildShip";
import { getCaseStudyPages } from "@/lib/api";
import Head from "next/head";
import React from "react";

const CaseStudy = ({ data }) => {
  return (
    <>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <CaseStudyLandingHero />
      <CaseStudies data={data} />
      <div className="-mt-24 sm:mt-0">
        <BuildShip />
      </div>
    </>
  );
};

export default CaseStudy;

export async function getStaticProps() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  if (butterToken) {
    try {
      const caseStudyPage = await getCaseStudyPages();
      return {
        props: {
          data: caseStudyPage,
        },
        revalidate: 10,
      };
    } catch (e) {
      return {
        props: { data: {} },
        revalidate: 10,
      };
    }
  }

  return {
    props: { data: {} },
    revalidate: 10,
  };
}
