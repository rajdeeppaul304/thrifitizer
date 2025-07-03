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
    <section className="portfolio section-padding ">
      {!hideSectionTitle && (
        <div className="container ">
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
                Our &nbsp;Works.
              </h3>
            </Split>
            <span className="tbg text-left" style={{ letterSpacing: "normal", textTransform: "none" }}>
              Portfolio
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
              <Link href={item.link}>
                <a className="imago wow" style={{ position: "relative", display: "block" }}>
                  <img src={item.image} alt="image" />
                  <div className="item-img-overlay"></div>
                  <div className="hover-view-more">
                    <a href={item.link} className="view-more-link">
                      <span>View More</span>
                      <i className="fa fa-arrow-right" aria-hidden="true" style={{ marginLeft: "8px" }}></i>
                    </a>
                  </div>
                </a>
              </Link>
            </div>
            <div className="cont">
              <h6 style={{ letterSpacing: "normal", textTransform: "none" }}>{item.title}</h6>
              <span style={{ letterSpacing: "normal", textTransform: "none" }}>{item.description.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
