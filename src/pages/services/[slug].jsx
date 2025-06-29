import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";

// Import all possible service components
import ThreeSixtyDegree from '../../components/services_components/360_degree_marketing.jsx';
import SocialMediaManagement from '../../components/services_components/social_media_management.jsx';
import seo_content from '../../components/services_components/seo_content.jsx';
import brand_strategy from '../../components/services_components/brand_strategy.jsx';
import influencer_affiliate from '../../components/services_components/influencer_affiliate.jsx';
import email_marketing from '../../components/services_components/email_marketing.jsx';

const componentMap = {
  '360_degree_marketing': ThreeSixtyDegree,
  'social_media_management': SocialMediaManagement,
  'seo_content': seo_content,
  'brand_strategy': brand_strategy,
  'influencer_affiliate': influencer_affiliate,
  'email_marketing': email_marketing,

};

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const ComponentToRender = componentMap[slug];

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

  if (!ComponentToRender) {
    return (
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <div className="container text-center py-5">
          <h1>Service Not Found</h1>
          <p>The service you're looking for does not exist.</p>
        </div>
        <Footer />
      </DarkTheme>
    );
  }

  return (
    <DarkTheme>
      <Head>
        <title>{slug.replace(/_/g, ' ')} | Thriftizer</title>
        <meta name="description" content={`Details about ${slug}`} />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ComponentToRender />
      <Footer />
    </DarkTheme>
  );
};

export default ServicePage;
