import PrivacyPolicyBody from "@/components/PrivacyPolicy/Body";
import Head from "next/head";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <PrivacyPolicyBody />
    </>
  );
};

export default PrivacyPolicyPage;
