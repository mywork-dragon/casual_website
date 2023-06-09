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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>
          Sample Landing Page with Components - powered by ButterCMS
        </title>
        <meta
          name="description"
          content="Sample Landing Page with Components - powered by ButterCMS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://buttercms.com/static/v2/images/favicon.png"
        />
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
