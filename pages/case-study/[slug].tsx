import CaseStudyBody from "@/components/CaseStudy/Body";
import CaseStudyHero from "@/components/CaseStudy/Hero";
import BuildShip from "@/components/BuildShip";
import Preloader from "@/components/preloader";
import { getCaseStudyPage } from "@/lib/api";
import Head from "next/head";
import ErrorPage from "next/error";
import React from "react";
import { useRouter } from "next/router";

const CaseStudy = ({ data: { fields } }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Preloader />;
  }

  if (!fields) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <CaseStudyHero {...fields} />
      <CaseStudyBody {...fields} />
      <div className="-mt-24 sm:mt-0">
        <BuildShip />
      </div>
    </>
  );
};

export default CaseStudy;

export async function getStaticProps({ params }) {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  if (butterToken) {
    try {
      const caseStudyPage = await getCaseStudyPage(params.slug);
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
