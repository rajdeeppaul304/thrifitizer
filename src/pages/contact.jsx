import React, { useEffect, useRef } from "react";
import ContactHeader from "../components/Contact-header";
import ContactWithMap from "../components/Contact-with-map";
import Navbar from "../components/Navbar";
import DarkTheme from "../layouts/Dark";

const Contact = () => {
  const fixedHeader = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Adjust main content margin based on header height
    const interval = setInterval(() => {
      if (fixedHeader.current && MainContent.current) {
        const slidHeight = fixedHeader.current.offsetHeight;
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);

    // Navbar scroll effect
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

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

    // Load WhatsApp Button Script
    const script = document.createElement("script");
    script.src = "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?12345";
    script.async = true;
    script.onload = () => {
      if (typeof window._waEmbed === "function") {
        window._waEmbed(wa_btnSetting);
      }
    };
    document.body.appendChild(script);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      {/* <ContactHeader sliderRef={fixedHeader} /> */}
      <ContactHeader 
      sliderRef={fixedHeader}
  title="Let's Build Your Success Story Next."
  subtitle="Whether you’re launching, scaling, or rebranding — we’d love to help."
  backgroundText="Contact"
/>
      <div className="main-content" ref={MainContent}>
        <ContactWithMap />
      </div>
    </DarkTheme>
  );
};

export default Contact;
