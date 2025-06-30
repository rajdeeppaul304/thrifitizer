import React, { useRef, useEffect } from "react";
import Head from 'next/head';
import Footer from "../components/Footer";
import IntroWithSlider1 from "../components/Intro-with-slider1";
import Navbar from "../components/Navbar";
import DarkTheme from "../layouts/Dark";


const Career = () => {
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
      <div ref={mainContent} className="main-content">
        <div className="page-header">
            <div className=" cont">
                {/* make the carrer page here */}
                asdf

            </div>
        </div>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Career;
