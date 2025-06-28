// pages/custom-package.tsx

import React, { useRef, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DarkTheme from "../layouts/Dark";
import CustomPackage from "../components/CustomPackage";

const CustomPackagePage = () => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize state on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DarkTheme>
      <Head>
        <title>Build Your Own Package</title>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>

      <Navbar nr={navbarRef} lr={logoRef} />

      <div className="main-content" style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 className="text-center mb-40">Build Your Custom Package</h2>
          <CustomPackage />
        </div>
      </div>

      <Footer />
    </DarkTheme>
  );
};

export default CustomPackagePage;
