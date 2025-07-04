import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../components/CircularText.css'; // ✅ Move it here

import WhatsAppButton from "../components/WhatsAppButton";

function MyApp({ Component, pageProps }) {

  return (

    <>
      <Head>
        <title>Thriftizer</title>
        <link rel="icon" href="./img/logo/logoh.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      >
      </Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="lazyOnload" 
        id="initWow" 
        src="/js/initWow.js"
      ></Script>
<WhatsAppButton />

    </>
  );
}

export default MyApp;
