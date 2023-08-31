import CaseStudyBody from "@/components/CaseStudy/Body";
import CaseStudyHero from "@/components/CaseStudy/Hero";
import BuildShip from "@/components/BuildShip";
import Preloader from "@/components/preloader";
import { getCaseStudyPage } from "@/lib/api";
import Head from "next/head";
import ErrorPage from "next/error";
import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

type CaseStudyProps = {
  data: {
    fields: {
      post_title: string;
      company_name: string;
      quote: string;
      person_name: string;
      person_title: string;
      person_headshot: string;
      company_logo_image: string;
      background_copy: string;
      goals_copy: string;
      challenges_copy: string;
      solutions_copy: string;
      outcomes_copy: string;
    };
  };
};

const CaseStudy = ({ data: { fields } }: CaseStudyProps) => {
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

export const getStaticProps: GetStaticProps<CaseStudyProps> = async ({
  params,
}) => {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  if (butterToken && params) {
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
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
