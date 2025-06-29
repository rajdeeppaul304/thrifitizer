import React from 'react';
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetails2Header from "../components/Project-details2-header";
import ProjectDetails2Introduction from "../components/Project-details2-introduction";
import ProjectDetails2Images from "../components/Project-details2-images";
import ProjectDetailsDescription from "../components/Project-details-description";
import ProjectDetailsVideo from "../components/Project-details-video";
import NextProject from "../components/Next-project";
import SmallFooter from "../components/Small-footer";
import Testimonials1 from "../components/Testimonials1";

const ProjectDetails3Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarRef]);

  // Extract image paths from the data
  const images = '/Pongkart/banner.png';
  const imagePaths = [
    '/Pongkart/Screenshot_2025_0625_090524.png',
    '/Pongkart/Screenshot_2025_0625_090559.png',
    '/Pongkart/Screenshot_2025_0625_090651.png',
    '/Pongkart/Screenshot_2025_0625_090852.png',
    '/Pongkart/banner.png',
  ];
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetails2Header images={images} Text="PongKart"  subText="https://www.pongkart.com/"/>
      <ProjectDetails2Introduction projectName="PongKart" />
      <ProjectDetails2Images imagePaths={imagePaths} />
      
      {/* <ProjectDetailsVideo
        videoBackground="/img/portfolio/project2/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      /> */}
      <ProjectDetailsDescription />
      <Testimonials1 subBgLftstl parallaxie withBG overlay/>
      <NextProject
        projectImage="/img/portfolio/project1/bg.jpg"
        projectTitle="Natural plus modern."
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetails3Dark
