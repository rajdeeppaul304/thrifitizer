import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ShowcasesGrid from "../../components/Showcases-grid";
import DarkTheme from "../../layouts/Dark";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Demos from "../../components/Demos";

gsap.registerPlugin(ScrollTrigger);

const preloaderStyles = `
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Outfit:wght@100..900&display=swap");
.mil-preloader {
  position: fixed;
  z-index: 99999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, black 0%, black 100%);
}
.mil-preloader .mil-preloader-animation {
  opacity: 0;
  position: relative;
  height: 100vh;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs {
  position: absolute;
  height: 100vh;
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-logo-img {
  opacity: 0;
  transform: scale(0.9) rotate(-10deg);
  transition: filter 0.3s;
  filter: blur(10px) brightness(0.7);
  width: 320px;
  max-width: 90vw;
  height: auto;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
  border-radius: 18px;
  background: transparent;
  padding: 0;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame {
  position: relative;
  padding: 0 30px;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame .mil-reveal-box {
  position: absolute;
  z-index: 9;
  opacity: 1 !important;
  height: 100%;
  background-color: #217953;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-reveal-frame p {
  filter: blur(0px);
  z-index: 0;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-green {
  color: #217953;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-white {
  color: #fff;
}
.mil-preloader .mil-preloader-animation .mil-pos-abs .mil-head1 {
  font-size: 3.5rem;
  font-family: 'Anton', 'Outfit', sans-serif;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
  margin: 0;
  padding: 0 0 0 10px;
}
.mil-preloader.mil-hidden {
  pointer-events: none;
}
@media (max-width: 768px) {
  .mil-preloader .mil-preloader-animation .mil-pos-abs {
    flex-direction: column;
  }
  .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-logo-img {
    width: 180px;
    max-width: 90vw;
    padding: 0;
  }
  .mil-preloader .mil-preloader-animation .mil-pos-abs .mil-head1 {
    font-size: 2.2rem;
    padding: 0 0 0 0;
  }
}
`;

const Preloader = ({ onFinish }) => {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Inject styles only once
    if (!document.getElementById("preloader-styles")) {
      const style = document.createElement("style");
      style.id = "preloader-styles";
      style.innerHTML = preloaderStyles;
      document.head.appendChild(style);
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });

    timeline
      .to(".mil-preloader-animation", {
        opacity: 1,
        ease: "sine",
        duration: 0.2,
      })
      .to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px) brightness(1)",
          duration: 1.1,
          ease: "power3.out",
        },
        "+=0.1"
      )
      .to(
        logoRef.current,
        {
          scale: 1.12,
          duration: 0.25,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        "-=0.3"
      )
      .to(
        logoRef.current,
        {
          opacity: 0,
          y: -60,
          duration: 0.5,
          ease: "power2.in",
        },
        "+=0.3"
      )
      .fromTo(
        ".mil-reveal-box",
        { x: 0, width: "0%" },
        { x: 0, width: "100%", duration: 0.45, ease: "power2.inOut" },
        "-=0.2"
      )
      .to(".mil-reveal-box", {
        right: "0",
        duration: 0.1,
      })
      .to(".mil-reveal-box", {
        width: "0%",
        duration: 0.3,
        ease: "power2.inOut",
      })
      .fromTo(
        ".mil-animation-2 p.mil-head1",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .to(
        ".mil-animation-2 p.mil-head1",
        {
          opacity: 0,
          y: "-40",
          duration: 0.6,
        },
        "+=0.5"
      )
      .to(
        ".mil-preloader",
        {
          opacity: 0,
          ease: "sine",
          duration: 0.8,
        },
        "+=0.2"
      )
      .add(() => {
        ScrollTrigger.refresh();
      }, "-=1")
      .add(() => {
        if (preloaderRef.current) {
          preloaderRef.current.classList.add("mil-hidden");
        }
      });
  }, [onFinish]);

  return (
    <div className="mil-preloader" ref={preloaderRef}>
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1" style={{ zIndex: 2 }}>
          <img
            ref={logoRef}
            className="mil-logo-img"
            src="/img/logo/logo.png"
            alt="Company Logo"
            draggable={false}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <span className="mil-reveal-box"></span>
            <p className="mil-head1 mil-m1">Thriftizer Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Showcase4Dark = () => {
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!loading) {
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
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <DarkTheme>
          <Navbar nr={navbarRef} />
          <ShowcasesGrid />
        </DarkTheme>
      )}
    </>
  );
};

const DemosPage = () => {
  // If you want to use the preloader, use <Showcase4Dark />
  // If you want to show only Demos, use <Demos />
  return <Demos />;
};

export default DemosPage;
