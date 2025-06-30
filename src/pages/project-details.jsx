import React, { useEffect, useRef } from "react";
import Head from "next/head";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetailsHeader from "../components/Project-details-header";
import ProjectDetailsIntroduction from "../components/Project-details-introduction";
import ProjectDetailsImages from "../components/Project-details-images";
import ProjectDetailsDescription from "../components/Project-details-description";
// import PortfolioCustomColumn from "../components/Portfolio-custom-column";
import WorksThreeColumnWithFilter from "../components/Works-three-column-with-filter";

import ProjectDetailsVideo from "../components/Project-details-video";
import NextProject from "../components/Next-project";
// import SmallFooter from "../components/Small-footer";
import NumbersWithVideo from "../components/Numbers-with-video/index.jsx"
import Numbers1 from "../components/Numbers"
import Testimonials1 from "../components/Testimonials1";
import TrustedPartners from "../components/Trusted-Partners";
import Footer from "../components/Footer";
import AboutHeader from "../components/portfolio_header";

const partners1 = [
  { id: 1, name: 'Google', image: '/trustedPartners/google.png' },
  { id: 2, name: 'Meta', image: '/trustedPartners/meta.png' },
  { id: 3, name: 'Omnisend', image: '/trustedPartners/omnisend.png' },
  { id: 4, name: 'Shopify', image: '/trustedPartners/Shopify.png' }
];

const partners2 = [
  { id: 1, name: 'Google', image: '/Awards/1.jpg' },
  { id: 2, name: 'Meta', image: '/Awards/2.png' },
  { id: 3, name: 'Omnisend', image: '/Awards/3.png' },
  { id: 4, name: 'Shopify', image: '/Awards/4.jpg' }
];


const galleryItems = [
  {
    id: 1,
    image: "/company/Watch.jpg",
    title: "Fire Boltt",
    url: "/fireboltt/",
    services: [],
    industries: [],
    type: "image",
    category: "techAndAccessories",
  },
  {
    id: 2,
    image: "/scroller/IMG-20250620-WA0037.jpg",
    title: "EpokeArt ",
    url: "/epoke/",
    services: [],
    industries: [],
    type: "image",
    category: "artAndCraft",
  },
  {
    id: 3,
    image: "/company/sleepcompany.jpg",
    title: "Sleep Company",
    url: "/sleepcompany/",
    services: [],
    industries: [],
    type: "image",
    category: "homeFragranceAndDecor",
  },
  {
    id: 4,
    image: "/company/glam.jpg",
    title: "GlamPlus",
    url: "/glam/",
    services: [],
    industries: [],
    type: "image",
    category: "beautyAndPersonalCare",
  },
  {
    id: 5,
    image: "/company/htrz.jpg",
    title: "HTRZMODZ",
    url: "/htrz/",
    services: [],
    industries: [],
    type: "image",
    category: "techAndAccessories",
  },
  {
    id: 6,
    image: "/company/indianethnic.jpg",
    title: "The Indian Ethnic Co.",
    url: "/indianethnicwear/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 7,
    image: "/company/instore.jpg",
    title: "Instore",
    url: "/instore/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 8,
    image: "/company/momstore.jpg",
    title: "Momstore",
    url: "/momstore/",
    services: [],
    industries: [],
    type: "image",
    category: "kidsAndBabyProducts",
  },
  {
    id: 9,
    image: "/company/pongkart.jpg",
    title: "Pongkart",
    url: "/pongkart/",
    services: [],
    industries: [],
    type: "image",
    category: "sportsAndActivewear",
  },
  {
    id: 10,
    image: "/company/hy_2.jpg",
    title: "HAY Clothing",
    url: "/heyclothing/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 11,
    image: "/scroller/IMG-20250621-WA0006.jpg",
    title: "Insaraf Furniture",
    url: "/safar-furniture/",
    services: [],
    industries: [],
    type: "image",
    category: "homeFragranceAndDecor",
  },
  {
    id: 12,
    image: "/scroller/IMG-20250621-WA0005.jpg",
    title: "The Design House Dubai",
    url: "/design-house/",
    services: [],
    industries: [],
    type: "image",
    category: "homeFragranceAndDecor",
  },
];



const ProjectDetailsDark = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

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
      <Head>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      {/* <ProjectDetailsHeader /> */}
      <AboutHeader/>
      <ProjectDetailsIntroduction />
      <Numbers1/>
      {/* <NumbersWithVideo/> */}
            <TrustedPartners partners={partners1} headingText="We Are Partners With."/>

      {/* <ProjectDetailsImages /> */}
      <ProjectDetailsDescription />
      {/* <WorksThreeColumnWithFilter/> */}

       <WorksThreeColumnWithFilter
        filterPosition="center"
        galleryItems={galleryItems}
      />

      {/* <ProjectDetailsVideo
        videoBackground="/img/portfolio/project1/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      /> */}
            <TrustedPartners partners={partners2} headingText="Our Achievements."/>

              <Testimonials1 subBgLftstl parallaxie withBG overlay/>

      <NextProject
        projectImage="/img/portfolio/project2/bg.jpg"
        projectTitle="Inspiring new space."
      />
      <Footer />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
