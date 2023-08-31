import { AppProps } from "next/app";
import Head from "next/head";
import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { Session, SessionContext } from "../causal";
import { getOrMakeDeviceId } from "../components/utils";

// adding line between imports keeps "organize imports" command from moving them around. The order matters b/c of the css cascade
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";

import "@/css/lineicons.css";

import "@/css/tiny-slider.min.css";

import "@/css/main.css";

import "@/css/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const _explicitDeviceId = router.query?.deviceId;
  const explicitDeviceId = Array.isArray(_explicitDeviceId)
    ? _explicitDeviceId[0]
    : _explicitDeviceId;

  const session = new Session({
    deviceId: explicitDeviceId ?? getOrMakeDeviceId(),
  });

  const pageLayout = (
    <div className="w-full min-h-screen font-inter">
      <Navbar />
      <div className="w-full min-h-screen">
        <Component {...pageProps} />
      </div>
      <ToastContainer />
      {router.pathname !== "/contact" && <Banner />}
      <Footer />
    </div>
  );

  return (
    <SessionContext.Provider value={session}>
      <Head>
        <meta
          name="title"
          content="Causal: Feature flagging and A/B testing software for product dev teams"
        />
        <meta name="description" content="Experiment rapidly and win." />
        <meta name="keywords" content="A/B testing, Feature Flagging" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
      </Head>
      {pageLayout}
    </SessionContext.Provider>
  );
}
