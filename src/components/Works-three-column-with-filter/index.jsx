/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition, galleryItems = [] }) => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);

  const categories = [
    ...new Set(galleryItems.flatMap((item) => item.category || [])),
  ];

  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">All</span>
              {categories.map((cat) => (
                <span key={cat} data-filter={`.${cat.toLowerCase()}`}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="gallery full-width">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 items ${
                  (Array.isArray(item.category)
                    ? item.category
                    : [item.category || "uncategorized"]
                  )
                  .map((cat) => cat.toLowerCase())
                  .join(" ")
                }`}
              >
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href={item.url || "#"}>
                    <a>
                      <img src={item.image} alt="gallery image" />
                    </a>
                  </Link>
                </div>
                {/* 👇 Title below the image */}
                {item.title && (
                  <div className="cont text-center mt-2">
                    <h6>{item.title}</h6>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
