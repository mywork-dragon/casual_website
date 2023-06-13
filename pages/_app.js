import { useEffect, useState } from "react";

import Router from "next/router";
import App from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { getMainMenu } from "@/lib/api";

import Preloader from "@/components/preloader";

import "bootstrap/dist/css/bootstrap.css";
import "@/css/lineicons.css";

import "@/css/tiny-slider.min.css";
import "@/css/main.css";
import "@/css/global.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Banner from "@/components/Layout/Banner";

function MyApp({ Component, pageProps, mainMenu }) {
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  // const authToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.js");

  //   const showLoader = () => {
  //     setIsLoading(true);
  //   };

  //   const removeLoader = () => {
  //     setIsLoading(false);
  //   };

  //   Router.events.on("routeChangeStart", showLoader);
  //   Router.events.on("routeChangeComplete", removeLoader);
  //   Router.events.on("routeChangeError", removeLoader);

  //   return () => {
  //     Router.events.off("routeChangeStart", showLoader);
  //     Router.events.off("routeChangeComplete", removeLoader);
  //     Router.events.off("routeChangeError", removeLoader);
  //   };
  // }, [authToken, router]);

  const pageLayout = (
    <div className="w-full min-h-screen font-inter">
      <Navbar />
      <div className="w-full min-h-screen overflow-x-hidden">
        <Component {...pageProps} />
      </div>
      <Banner />
      <Footer />
    </div>
  );

  return (
    <>
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

      {/* {isLoading && <Preloader></Preloader>} */}
      {pageLayout}
      {/* {!isLoading && pageLayout} */}
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const authToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  let mainMenu = [];

  if (authToken) {
    try {
      mainMenu = await getMainMenu();
    } catch (e) {
      console.error("Couldn't load main menu links.", e);
    }
  }

  return { ...appProps, mainMenu };
};

export default MyApp;
