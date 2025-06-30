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


    // document.body.appendChild(script);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
      // document.body.removeChild(script);
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
