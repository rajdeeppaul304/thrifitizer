import React, { useRef, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DarkTheme from "../layouts/Dark";

const Custom404 = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DarkTheme>
      <Head>
        <title>404 - Page Not Found</title>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="main-content" style={{ padding: "6rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you’re looking for doesn’t exist or has been moved.</p>
      </div>
      <Footer />
    </DarkTheme>
  );
};

export default Custom404;
