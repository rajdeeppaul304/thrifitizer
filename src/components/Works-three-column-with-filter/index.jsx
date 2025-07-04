/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
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
  // {
  //   id: 3,
  //   image: "/company/sleepcompany.jpg",
  //   title: "Sleep Company",
  //   url: "/sleepcompany/",
  //   services: [],
  //   industries: [],
  //   type: "image",
  //   category: "home_fragrance_and_decor",
  // },
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


const WorksThreeColumnWithFilter = ({ filterPosition = "center" }) => {
  const iso = useRef(null);                      // ❷ keeps Isotope instance
  const [loaded, setLoaded] = useState(false);

  // ---------- 1. Initialise Isotope once ----------
  useEffect(() => {
    setLoaded(true);
    if (!iso.current) {
      iso.current = new Isotope(".gallery", {
        itemSelector: ".items",
        layoutMode: "fitRows",                   // or 'masonry'—whatever you prefer
        percentPosition: true,
        transitionDuration: "0.4s",
      });
    }
    return () => iso.current && iso.current.destroy();
  }, []);

  // ---------- 2. Build category list ----------
  const categories = [
    ...new Set(galleryItems.map((item) => item.category ?? "uncategorized")),
  ];

  // ---------- 3. Handle dropdown change ----------
  const handleFilterChange = (e) => {
    const val = e.target.value;                  // "*", "tech_and_accessories", etc.
    if (iso.current) {
      iso.current.arrange({
        filter: val === "*" ? "*" : `.${val}`,
      });
    }
  };

  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <h1 className="mb-20 mt-10 responsive-heading text-center">
          Explore Our Work.
        </h1>


{/* ─── Dropdown ─── */}
<div className="row mb-4">
  <div className="col-12 text-center text-md-start">
    <div className="dropdown-container">
      <select
        id="categoryFilter"
        className="custom-select"
        onChange={handleFilterChange}
      >
        <option value="*">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat.toLowerCase()}>
            {cat.replace(/_/g, " ")}
          </option>
        ))}
      </select>
      <div className="select-arrow">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  .dropdown-container {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 300px;
  
  }

  .custom-select {
    width: 100%;
    padding: 12px 45px 12px 20px;
    border: 2px solid rgba(117, 218, 180, 0.3);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(117, 218, 180, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(10px);
    color: white;
    font-size: 16px;
    font-weight: 500;
    appearance: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(117, 218, 180, 0.1);
    height:50px;
    width:300px;
    }

  .custom-select:hover {
    border-color: rgb(117, 218, 180);
    background: linear-gradient(135deg, rgba(117, 218, 180, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
    box-shadow: 0 8px 30px rgba(117, 218, 180, 0.2);
    transform: translateY(-2px);
  }

  .custom-select:focus {
    outline: none;
    border-color: rgb(117, 218, 180);
    background: linear-gradient(135deg, rgba(117, 218, 180, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
    box-shadow: 0 0 0 3px rgba(117, 218, 180, 0.2), 0 8px 30px rgba(117, 218, 180, 0.2);
  }

  .custom-select option {
    background: #0c0f16;
    color: white;
    padding: 12px;
    border: none;
  }

  .custom-select option:hover {
    background: rgba(117, 218, 180, 0.1);
  }

  .select-arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: rgb(117, 218, 180);
    transition: transform 0.3s ease;
  }

  .custom-select:hover + .select-arrow {
    transform: translateY(-50%) rotate(180deg);
  }

  .custom-select:focus + .select-arrow {
    transform: translateY(-50%) rotate(180deg);
  }

  /* Mobile responsiveness */
  @media (max-width: 767.98px) {
    .dropdown-container {
      max-width: 100%;
    }
      .dropdown-container {
      max-width: 250px;
    }
    
    .custom-select {
      font-size: 14px;
      padding: 14px 45px 14px 20px;
      width:250px;
    }
  }

  /* Desktop positioning */
  @media (min-width: 768px) {
    .dropdown-container {
      max-width: 300px;
    }
  }
`}</style>


        {/* ─── Gallery ─── */}
        <div className="row gallery full-width">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 items ${item.category.toLowerCase()}`}
            >
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href={item.url || "#"} passHref legacyBehavior>
                  <a>
                    <img src={item.image} alt={item.title} />
                  </a>
                </Link>
              </div>
              {item.title && (
                <div className="cont text-center mt-2">
                  <h6>{item.title}</h6>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;