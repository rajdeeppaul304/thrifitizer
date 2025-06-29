import React, { useRef, useEffect } from "react";
import Head from 'next/head';
import AboutUs1 from "../components/About-us1";
import BlogsThreeColumn2 from "../components/Blogs-three-column2";
import BlogsThreeColumn1 from "../components/Blogs-three-column1_2";

import ContactSection from "../components/Contact-section";
import Footer from "../components/Footer";
import IntroWithSlider1 from "../components/Intro-with-slider1";
import Navbar from "../components/Navbar";
import PortfolioCustomColumn from "../components/Portfolio-custom-column";
import Services4 from "../components/Services4";
// import TeamWithSkills from "../../components/Team-with-skills";
import Testimonials1 from "../components/Testimonials1";
import DarkTheme from "../layouts/Dark";
import TrustedPartners from "../components/Trusted-Partners";

const partners = [
  { id: 1, name: 'Google', image: '/trustedPartners/google.png' },
  { id: 2, name: 'Meta', image: '/trustedPartners/meta.png' },
  { id: 3, name: 'Omnisend', image: '/trustedPartners/omnisend.png' },
  { id: 4, name: 'Shopify', image: '/trustedPartners/Shopify.png' }
];


const Homepage4 = () => {
  const fixedSlider = useRef(null);
  const mainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const adjustMargin = () => {
      if (fixedSlider.current && mainContent.current) {
        const slidHeight = fixedSlider.current.offsetHeight;
        mainContent.current.style.marginTop = slidHeight + "px";
      }
    };

    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    adjustMargin();
    handleScroll();

    const intervalId = setInterval(adjustMargin, 1000);
    window.addEventListener("scroll", handleScroll);

    // WhatsApp Button Embed
    const wa_btnSetting = {
      btnColor: "#16BE45",
      ctaText: "WhatsApp Us",
      cornerRadius: 40,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: "left",
      whatsAppNumber: "918861324254",
      welcomeMessage: "Hello",
      zIndex: 999999,
      btnColorScheme: "light"
    };

    // Dynamically load WhatsApp button script if not already present
    if (!window._waEmbed) {
      const script = document.createElement("script");
      script.src = "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?12345";
      script.async = true;
      script.onload = () => {
        if (window._waEmbed) {
          window._waEmbed(wa_btnSetting);
        }
      };
      document.body.appendChild(script);
    } else {
      window._waEmbed(wa_btnSetting);
    }

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DarkTheme>
      <Head>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} />
      <div ref={mainContent} className="main-content">
        <AboutUs1 />
        <Services4 withBG withPadding />
        <PortfolioCustomColumn column={2} filterPosition="left" />
        <Testimonials1 subBgLftstl parallaxie withBG overlay/>
        {/* <TeamWithSkills /> */}
        {/* <TrustedPartners  /> */}
        <TrustedPartners partners={partners} headingText="We are Partners with" />
        {/* <BlogsThreeColumn2 subBG /> */}
        <BlogsThreeColumn1 subBG />

        
        <ContactSection />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage4;
