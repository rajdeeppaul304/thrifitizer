import React from 'react';
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetails2Header from "../components/Project-details2-header";
import ProjectDetails2Introduction from "../components/Project-details2-introduction";
import ProjectDetails2Images from "../components/Project-details2-images";
import WorksThreeColumnWithFilter from "../components/Works-three-column-with-filter";
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
  const images = ['/Sleepcompany/bannerimage.png', '/Sleepcompany/mobile_banner.png'];
  const imagePaths = [
    '/Sleepcompany/1.jpg',
    '/Sleepcompany/2.jpeg',
    '/Sleepcompany/3.jpeg',
    '/Sleepcompany/4.jpg',
    '/Sleepcompany/5.png',

  ];
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetails2Header images={images} Text="The Sleep Company"  subText="https://thesleepcompany.in/"
      subTitle='Full website development delivering an optimized user experience for a D2C sleep-tech brand.'/>
      <ProjectDetails2Introduction projectName="The Sleep Company" />
      <ProjectDetails2Images imagePaths={imagePaths} />
      
      {/* <ProjectDetailsVideo
        videoBackground="/img/portfolio/project2/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      /> */}
      <WorksThreeColumnWithFilter
        filterPosition="center"
      />
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
