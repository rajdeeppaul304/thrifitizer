import React, { useEffect, useRef } from "react";
import Head from "next/head";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetailsHeader from "../components/Project-details-header";
import ProjectDetailsIntroduction from "../components/Project-details-introduction";
import ProjectDetailsImages from "../components/Project-details-images";
import ProjectDetailsDescription from "../components/Project-details-description";
import ProjectDetailsVideo from "../components/Project-details-video";
import NextProject from "../components/Next-project";
// import SmallFooter from "../components/Small-footer";
import NumbersWithVideo from "../components/Numbers-with-video/index.jsx"
import Testimonials1 from "../components/Testimonials1";
import TrustedPartners from "../components/Trusted-Partners";
import Footer from "../components/Footer";
import AboutHeader from "../components/portfolio_header";



const partners = [
  { id: 1, name: 'Google', image: '/Awards/1.jpg' },
  { id: 2, name: 'Meta', image: '/Awards/2.png' },
  { id: 3, name: 'Omnisend', image: '/Awards/3.png' },
  { id: 4, name: 'Shopify', image: '/Awards/4.jpg' }
];



const ProjectDetailsDark = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // WhatsApp button settings
    var wa_btnSetting = {
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

    // Load WhatsApp button script if not already loaded
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
  }, []);

  return (
    <DarkTheme>
      <Head>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      {/* <ProjectDetailsHeader /> */}
      <AboutHeader/>
      <ProjectDetailsIntroduction />
      <NumbersWithVideo/>
      <TrustedPartners partners={partners} headingText="Our Achievements."/>

      {/* <ProjectDetailsImages /> */}
      <ProjectDetailsDescription />
      {/* <ProjectDetailsVideo
        videoBackground="/img/portfolio/project1/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      /> */}
              <Testimonials1 subBgLftstl parallaxie withBG overlay/>

      <NextProject
        projectImage="/img/portfolio/project2/bg.jpg"
        projectTitle="Inspiring new space."
      />
      <Footer />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
