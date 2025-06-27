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
  const images = '/Fireboltt/file_00000000ff90622fb0a8f9f69f4f7ff1.png';
  const imagePaths = [
    '/Fireboltt/file_00000000ff90622fb0a8f9f69f4f7ff1.png',
    '/Fireboltt/file_00000000045461f8bb3ce9660e00929c.png',
    '/Fireboltt/file_00000000715061f4b0fb6ba507f9a6ec.png',
    '/Fireboltt/file_00000000bbcc61f8bdc05c86b7905c46.png',
    '/Fireboltt/file_00000000efa0622f9ee0205addabacc3 (1).png',
  ];
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetails2Header images={images} Text="Fireboltt" />
      <ProjectDetails2Introduction />
      <ProjectDetails2Images imagePaths={imagePaths} />
      <ProjectDetailsDescription />
      <ProjectDetailsVideo
        videoBackground="/img/portfolio/project2/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      />
      <NextProject
        projectImage="/img/portfolio/project1/bg.jpg"
        projectTitle="Natural plus modern."
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetails3Dark;
