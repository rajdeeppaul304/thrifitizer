/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
const galleryItems = [
  {
    id: 1,
    image: "/company/Watch.jpg",
    title: "Fire Boltt",
    url: "/fireboltt/",
    services: [],
    industries: [],
    type: "image",
    category: "tech_and_accessories",
  },
  {
    id: 2,
    image: "/scroller/IMG-20250620-WA0037.jpg",
    title: "EpokeArt",
    url: "/epoke/",
    services: [],
    industries: [],
    type: "image",
    category: "art_and_craft",
  },
  {
    id: 3,
    image: "/company/sleepcompany.jpg",
    title: "Sleep Company",
    url: "/sleepcompany/",
    services: [],
    industries: [],
    type: "image",
    category: "home_fragrance_and_decor",
  },
  {
    id: 4,
    image: "/company/glam.jpg",
    title: "GlamPlus",
    url: "/glam/",
    services: [],
    industries: [],
    type: "image",
    category: "beauty_and_personal_care",
  },
  {
    id: 5,
    image: "/company/htrz.jpg",
    title: "HTRZMODZ",
    url: "/htrz/",
    services: [],
    industries: [],
    type: "image",
    category: "tech_and_accessories",
  },
  {
    id: 6,
    image: "/company/indianethnic.jpg",
    title: "The Indian Ethnic Co.",
    url: "/indianethnicwear/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 7,
    image: "/company/instore.jpg",
    title: "Instore",
    url: "/instore/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 8,
    image: "/company/momstore.jpg",
    title: "Momstore",
    url: "/momstore/",
    services: [],
    industries: [],
    type: "image",
    category: "kids_and_baby_products",
  },
  {
    id: 9,
    image: "/company/pongkart.jpg",
    title: "Pongkart",
    url: "/pongkart/",
    services: [],
    industries: [],
    type: "image",
    category: "sports_and_activewear",
  },
  {
    id: 10,
    image: "/company/hy_2.jpg",
    title: "HAY Clothing",
    url: "/heyclothing/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 11,
    image: "/scroller/IMG-20250621-WA0006.jpg",
    title: "Insaraf Furniture",
    url: "/safar-furniture/",
    services: [],
    industries: [],
    type: "image",
    category: "home_fragrance_and_decor",
  },
  {
    id: 12,
    image: "/scroller/IMG-20250621-WA0005.jpg",
    title: "The Design House Dubai",
    url: "/design-house/",
    services: [],
    industries: [],
    type: "image",
    category: "home_fragrance_and_decor",
  },
  {
    id: 13,
    image: "/apaapi/outer_image.jpg",
    title: "Apaapi",
    url: "/apaapi/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 14,
    image: "/moborr/outer_image.jpg",
    title: "Moborr",
    url: "/moborr/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
  {
    id: 15,
    image: "/colonial_candle/1.jpg",
    title: "Colonial Candle",
    url: "/colonial_candle/",
    services: [],
    industries: [],
    type: "image",
    category: "home_fragrance_and_decor",
  },
  {
    id: 16,
    image: "/rubz/1.jpg",
    title: "Rubz",
    url: "/rubz/",
    services: [],
    industries: [],
    type: "image",
    category: "beauty_and_personal_care",
  },
  {
    id: 17,
    image: "/himalaya/1.jpg",
    title: "Himalaya Fine Art",
    url: "/himalaya/",
    services: [],
    industries: [],
    type: "image",
    category: "art_and_craft",
  },
  {
    id: 18,
    image: "/curious_cub/outer_image.jpg",
    title: "Curious Cub",
    url: "/curious_cub/",
    services: [],
    industries: [],
    type: "image",
    category: "kids_and_baby_products",
  },
  {
    id: 19,
    image: "/crossbeats/1.jpg",
    title: "Crossbeats",
    url: "/crossbeats/",
    services: [],
    industries: [],
    type: "image",
    category: "tech_and_accessories",
  },
  {
    id: 20,
    image: "/jogler/outer_image.jpg",
    title: "Jogler",
    url: "/jogler/",
    services: [],
    industries: [],
    type: "image",
    category: "sports_and_activewear",
  },


    {
    id: 21,
    image: "/Hobbyone/outer_image.jpg",
    title: "HobbyOne",
    url: "/hobbyone/",
    services: [],
    industries: [],
    type: "image",
    category: "art_and_craft",
  },
  {
    id: 22,
    image: "/Tresmode/outer_image.jpg",
    title: "Tresmode",
    url: "/tresmode/",
    services: [],
    industries: [],
    type: "image",
    category: "apparel",
  },
    {
    id: 23,
    image: "/Crozzo/outer_image.jpg",
    title: "Crozzo",
    url: "/crozzo/",
    services: [],
    industries: [],
    type: "image",
    category: "foo_and_gourmet",
  },
];



const WorksThreeColumnWithFilter = ({ filterPosition }) => {
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
        <h1 className="mb-20 mt-10 responsive-heading text-center">Explore Our Work.</h1>
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
                  {cat.replace(/_/g, ' ')} {/* <-- Replaces underscores with spaces */}
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
