import ContactBody from "@/components/Contact/Body";
import Head from "next/head";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <ContactBody />
    </>
  );
};

export default ContactPage;
