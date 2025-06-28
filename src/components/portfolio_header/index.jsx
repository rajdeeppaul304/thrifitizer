import React from "react";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ position: "relative", overflow: "hidden", height: "100vh" }}
    >
      {/* ✅ Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/Video/portfolio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Black overlay over video */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // strong dark overlay
          zIndex: -1,
        }}
      ></div>

      {/* ✅ Content */}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1 className="text-white mb-30">Work That Speaks Volumes</h1>
              
              {/* ✅ Call-to-action Button */}
              <p href="/contact" className=" mt-20">
                From high-converting Shopify stores to full-scale brand transformations — <br/>
                here’s a glimpse of what we’ve built for brands across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
