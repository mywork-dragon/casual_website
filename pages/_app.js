import App from "next/app";
import Head from "next/head";

import { getMainMenu } from "@/lib/api";

import "bootstrap/dist/css/bootstrap.css";
import "@/css/lineicons.css";

import "@/css/tiny-slider.min.css";
import "@/css/main.css";
import "@/css/global.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Banner from "@/components/Layout/Banner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
      {pageLayout}
    </>
  );
}

export default MyApp;
