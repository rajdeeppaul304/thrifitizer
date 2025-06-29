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

const ProjectDetails5Dark = () => {
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
  const images = '/curious_cub/banner.jpg';
  const imagePaths = [
    '/curious_cub/1.jpg',
    '/curious_cub/2.jpg',
    '/curious_cub/3.jpg',
    '/curious_cub/4.jpg',
    '/curious_cub/5.jpg',

  ];
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetails2Header images={images} Text="Curious Cub"  subText="Curious Cub"/>
      <ProjectDetails2Introduction projectName="Curious Cub" />
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

export default ProjectDetails5Dark
