import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DarkTheme from "../layouts/Dark";
import ColorThief from "colorthief";

const MoodboardHeader = () => (
  <header
    className="pages-header bg-img valign parallaxie"
    style={{ backgroundImage: "url(/Banner/moodboard-banner.jpg)" }}
    data-overlay-dark="5"
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cont text-center">
<h1
  className="mb-3"
  style={{
    fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
    lineHeight: "1.2",
  }}
>
  Moodboard Generator
</h1>            <div className="path d-flex justify-content-center flex-wrap gap-1">
              <a href="#0">Home</a>
              <span>/</span>
              <a href="#0" className="active">
                Moodboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const MoodboardIntro = () => (
  <section className="intro-section section-padding pb-0">
    <div className="container">
      <div className="row">
        {/* Title on small screens full width, margin bottom */}
        <div className="col-lg-3 col-md-4 col-12 mb-4 mb-md-0">
          <div className="htit">
            <h4>Generate your inspiration board</h4>
          </div>
        </div>
        {/* Text full width on small, aligned on medium and large */}
        <div className="col-lg-8 offset-lg-1 col-md-8 col-12">
          <div className="text">
            <p>
              Enter keywords that describe the mood or style you want, and get
              a curated set of images and matching color palettes to inspire
              your design.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
















const Moodboard = ({ theme = "dark" }) => {
  const navbarRef = useRef(null);
  const [query, setQuery] = useState("minimal beach");
  const [images, setImages] = useState([]);
  const [palettes, setPalettes] = useState([]);
  const [copiedColor, setCopiedColor] = useState(null);
  const [loading, setLoading] = useState(false);

  const UNSPLASH_ACCESS_KEY = "eLfZqxY24RcZW3S-Fj7-JgTzUTn6wWShO5FcuOIT0Ac";

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

  const fetchImages = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setImages([]);
    setPalettes([]);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=6`
      );
      const data = await res.json();
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  const extractPalette = (img, index) => {
    const colorThief = new ColorThief();
    if (img && img.complete) {
      try {
        const colors = colorThief.getPalette(img, 5);
        setPalettes((prev) => {
          const newPalettes = [...prev];
          newPalettes[index] = colors;
          return newPalettes;
        });
      } catch (e) {
        console.error("Palette extraction failed", e);
      }
    }
  };

  const handleColorClick = (rgb) => {
    const value = `rgb(${rgb.join(",")})`;
    navigator.clipboard.writeText(value).then(() => {
      setCopiedColor(value);
      setTimeout(() => setCopiedColor(null), 1000);
    });
  };

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <MoodboardHeader />
      <MoodboardIntro />

      {/* Inline Scoped Styles */}
      <style>{`
        .moodboard-img {
          transition: transform 0.4s ease;
        }
        .moodboard-img:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        .color-dot {
          position: relative;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .color-dot:hover {
          transform: scale(1.15);
        }
        .color-tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: #fff;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
        }

        /* Moodboard input */
.moodboard-input {
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  font-size: 18px;
  padding: 10px 5px;
  width: 100%;
  transition: border-color 0.3s;
  outline: none;
}

.moodboard-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.moodboard-input:focus {
  border-bottom: 2px solid #fff;
}
.h1-responsive {
  font-size: 2rem; /* Mobile base */
}

@media (min-width: 576px) {
  .h1-responsive {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) {
  .h1-responsive {
    font-size: 3rem;
  }
}

@media (min-width: 992px) {
  .h1-responsive {
    font-size: 4rem;
  }
}


      `}</style>

      <section
        className="moodboard-section section-padding"
        style={{ paddingTop: "80px", position: "relative", zIndex: 1 }}
      >
        <div className="container text-center">
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
  <input
    type="text"
    className="moodboard-input mb-3"
    placeholder="Enter moodboard keywords (e.g. calm minimal beach)"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button
    className={`btn-curve ${theme === 'dark' ? 'btn-lit':'btn-color'} disabled custom-hover-btn`}
    data-wow-delay=".5s"
    onClick={fetchImages}
    disabled={loading}
  >
    
    <span>{loading ? "Generating..." : "Generate Moodboard"}</span>
  </button>



            </div>
          </div>

          <div className="row mt-30">
            {images.length === 0 && !loading && (
              <p className="text-muted">
                No images to display. Try generating a moodboard.
              </p>
            )}

            {images.map((img, index) => (
              <div className="col-md-4 mb-5" key={img.id}>
                <img
                  src={img.urls.small}
                  alt={img.alt_description || query}
                  crossOrigin="anonymous"
                  className="img-fluid rounded moodboard-img"
                  onLoad={(e) => extractPalette(e.target, index)}
                  style={{ cursor: "default", userSelect: "none" }}
                />
                <div className="d-flex mt-3 justify-content-center gap-2 flex-wrap">
                  {palettes[index] &&
                    palettes[index].map((color, i) => {
                      const rgb = `rgb(${color.join(",")})`;
                      return (
                        <div
                          key={i}
                          className="color-dot"
                          onClick={() => handleColorClick(color)}
                          style={{
                            backgroundColor: rgb,
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "1px solid #ddd",
                            margin: 4,
                          }}
                          title="Click to copy"
                        >
                          {copiedColor === rgb && (
                            <div className="color-tooltip">Copied!</div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </DarkTheme>
  );
};

export default Moodboard;
