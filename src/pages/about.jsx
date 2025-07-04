import React, { useEffect, useRef } from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import MinimalArea from "../components/Minimal-area";
import Navbar from "../components/Navbar";
// import Services4 from "../components/Services4";
import Services2 from "../components/Services2";
import Services4 from "../components/Services4";

import SkillsCircle from "../components/Skills-circle";
import Team1 from "../components/Team1";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import DarkTheme from "../layouts/Dark";







const AboutDark = () => {
  const navbarRef = useRef(null);

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



  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <AboutHeader />
      <AboutIntro />
      {/* <Services4 withPadding withOutTitle /> */}
      {/* <Services2 withPadding  /> */}
        <Services4 withBG withPadding />

      <VideoWithTestimonials />
      {/* <SkillsCircle subBG theme="dark" /> */}
      {/* <Team1 /> */}
      {/* <MinimalArea /> */}
      <Clients1 theme="dark" />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
