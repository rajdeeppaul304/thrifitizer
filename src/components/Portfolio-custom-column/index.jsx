/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolioData from "../../data/sections/portfolio1.json";

const PortfolioCustomColumn = ({
  column,
  hideSectionTitle,
}) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);

  return (
    <section className="portfolio section-padding pb-70">
      {!hideSectionTitle && (
        <div className="container">
          <div className="sec-head">
            <h6 className="wow fadeIn" data-wow-delay=".5s" style={{ letterSpacing: "normal", textTransform: "none" }}>
              portfolio
            </h6>
            <Split>
              <h3
                className="wow words chars splitting"
                data-splitting
                style={{ letterSpacing: "normal", textTransform: "none" }}
              >
                our works.
              </h3>
            </Split>
            <span className="tbg text-right" style={{ letterSpacing: "normal", textTransform: "none" }}>
              portfolio
            </span>
          </div>
        </div>
      )}

      <div className="gallery full-width">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className={`${
              column === 3
                ? "col-lg-4 col-md-6"
                : column === 2
                ? "col-md-6"
                : "col-12"
            } items wow fadeInUp ${
              item.id === 2 && column === 3
                ? "lg-mr"
                : item.id === 1 && column === 2
                ? "lg-mr"
                : ""
            }`}
            data-wow-delay=".4s"
          >
            {/* added border radius */}
            <div className="item-img" style={{ borderRadius: "20px" }}>
              <Link href="/project-details2/">
                <a className="imago wow">
                  <img src={item.image} alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </Link>
            </div>
            <div className="cont">
              <h6 style={{ letterSpacing: "normal", textTransform: "none" }}>{item.title.toLowerCase()}</h6>
              <span style={{ letterSpacing: "normal", textTransform: "none" }}>{item.description.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
