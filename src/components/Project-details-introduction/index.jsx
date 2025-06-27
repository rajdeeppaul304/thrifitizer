import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Brief Description
              </h4>
            </div>
          </div>
          {/* Description */}
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">
                 We partnered with Brand Elevate to redesign their online presence, focusing on seamless user experience and a modern visual identity. The result was a high-performing Shopify store that drove significant growth.
              </p>
            </div>
          </div>

          {/* Project Name */}
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Project Name</h6>
              <p>
                <a href="#0">Brand Elevate</a>
              </p>
            </div>
          </div>
          {/* Industry */}
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Industry</h6>
              <p>eCommerce</p>
            </div>
          </div>
          {/* Tech Stack / Service */}
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tech Stack / Service</h6>
              <p>
                <Link href="#">Shopify</Link>,{" "}
                <Link href="#">React</Link>,{" "}
                <Link href="#">UI/UX Design</Link>
              </p>
            </div>
          </div>
          {/* Results */}
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Results</h6>
              <p>
                2x conversion rate, 40% increase in sales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
