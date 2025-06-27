import React from 'react'
import DarkTheme from "./src/layouts/Dark";
import Navbar from "./src/components/Navbar";
import ProjectDetails2Header from "./src/components/Project-details2-header";
import ProjectDetails2Introduction from "./src/components/Project-details2-introduction";
import ProjectDetails2Images from "./src/components/Project-details2-images";
import ProjectDetailsDescription from "./src/components/Project-details-description";
import ProjectDetailsVideo from "./src/components/Project-details-video";
import NextProject from "./src/components/Next-project";
import SmallFooter from "./src/components/Small-footer";
import ShowcassesFullScreenData from "./src/data/showcases-full-screen-slider.json";

const ProjectDetails3Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
    logo = logoRef.current;
    if (window.pageYOffset > 300) {
    navbar.classList.add("nav-scroll");
    } else {
    navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    });
  }, [navbarRef]);

  // Extract image paths from the data
  const images = '/company/Watch.jpg';

  return (
    <DarkTheme>
    <Navbar nr={navbarRef} lr={logoRef} />
    <ProjectDetails2Header images={images} />
    <ProjectDetails2Introduction />
    <ProjectDetails2Images />
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
}

export default ProjectDetails3Dark
