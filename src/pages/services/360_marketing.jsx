import React from 'react';
import Head from 'next/head';
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import  { useRef, useEffect } from "react";
 
const PerformanceMarketingPage = () => {
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
        <title>360° Performance Marketing | Thriftizer</title>
        <meta name="description" content="Holistic performance marketing across every digital channel for Shopify and BigCommerce stores" />

      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
<PerformanceMarketingComponent/>
              <Footer />

    </DarkTheme>
  );
};

export default PerformanceMarketingPage;