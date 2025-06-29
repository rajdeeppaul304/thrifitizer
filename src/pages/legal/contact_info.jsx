import React, { useRef } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";

const ContactInfo = () => {
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
            <h1 className="mb-4 text-center">Contact information
</h1>
            <p className="mb-4">
Trade name: thriftizer-solutions
<br/><br/>
Phone number: 8861324254
<br/><br/>
Email: praveen@thriftizer.com
<br/><br/>
Physical address: 24/D, 4th Floor, Friends Colony, 560068 Bangalore KA, India
<br/><br/>
VAT number:
<br/><br/>
Trade number:
<br/><br/>
Trade name: Thriftizer Solutions LLP
<br/><br/>
Phone number: 8861324254
<br/><br/>
Email: praveen@thriftizer.com
<br/><br/>
Physical address: 24/D, 4th Floor, Friends Colony, 560068 Bangalore KA, India </p>

          </div>
        </div>
      </section>

      <Footer />
    </DarkTheme>
  );
};

export default ContactInfo;
