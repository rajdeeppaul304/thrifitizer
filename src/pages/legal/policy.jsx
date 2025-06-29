import React, { useRef } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";

const PrivacyPolicy = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <DarkTheme>
      <Head>
        <title>Privacy Policy</title>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>

      <Navbar nr={navbarRef} lr={logoRef} />

      <section className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-left">
            <h1 className="mb-4 text-center">Privacy Policy</h1>
            <p className="mb-4">
Disclaimer: The information presented on this website is based on internal data and estimation methods. While we strive to ensure the accuracy of this information, we cannot guarantee its correctness. Thriftizer is not responsible for any errors or omissions in the information provided. In no event will thriftizer or its partners or employees be liable to anyone for any decision made in reliance on the information on the site.            </p>

          </div>
        </div>
      </section>

      <Footer />
    </DarkTheme>
  );
};

export default PrivacyPolicy;
