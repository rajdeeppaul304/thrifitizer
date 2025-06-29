import React, { useState } from "react";

// Example gallery data
const galleryItems = [
  {
    id: 1,
    image: "/company/Watch.jpg",
    title: "Fire Boltt",
    url: "/fireboltt/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 2,
    image: "/scroller/IMG-20250620-WA0037.jpg",
    title: "EpokeArt ",
    url: "/epoke/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 3,
    image: "/company/sleepcompany.jpg",
    title: "Sleep Company",
    url: "/sleepcompany/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 4,
    image: "/company/glam.jpg",
    title: "GlamPlus",
    url: "/glam/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 5,
    image: "/company/htrz.jpg",
    title: "HTRZMODZ",
    url: "/htrz/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 6,
    image: "/company/indianethnic.jpg",
    title: "The Indian Ethnic Co.",
    url: "/indianethnicwear/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 7,
    image: "/company/instore.jpg",
    title: "Instore",
    url: "/instore/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 8,
    image: "/company/momstore.jpg",
    title: "Momstore",
    url: "/momstore/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 9,
    image: "/company/pongkart.jpg",
    title: "Pongkart",
    url: "/pongkart/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 10,
    image: "/Heyclothing/Screenshot_2025_0625_125119.png",
    title: "HAY Clothing",
    url: "/heyclothing/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 11,
    image: "/scroller/IMG-20250621-WA0006.jpg",
    title: "Insaraf Furniture",
    url: "/safar-furniture/",
    services: [],
    industries: [],
    type: "image",
  },
  {
    id: 12,
    image: "/scroller/IMG-20250621-WA0005.jpg",
    title: "The Design House Dubai",
    url: "/design-house/",
    services: [],
    industries: [],
    type: "image",
  },
];

const cardStyles = {
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
  borderRadius: "16px",
  overflow: "hidden",
  background: "#232526",
  border: "none",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const cardHoverStyles = {
  transform: "translateY(-8px) scale(1.03)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
};

const imgBoxStyles = {
  width: "100%",
  aspectRatio: "3/4", // vertical rectangle
  background: "#18191A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const imgStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  transition: "filter 0.2s",
  display: "block",
};

const ProjectDetailsDescription = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      className="intro-section section-padding"
      style={{
        background: "#18191A",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .custom-select:focus {
          border-color:  #217953;
          box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }
        .custom-card .card-title {
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .custom-card .card-body {
          background: rgba(30,32,34,0.95);
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
        .custom-card {
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
        }
        .custom-badge {
          background: #217953;
          color: #fff;
          border: none;
          margin-right: 0.5rem;
          margin-bottom: 0.25rem;
          font-size: 0.85rem;
          padding: 0.4em 0.8em;
          border-radius: 8px;
        }
        .custom-badge.secondary {
          background: #6c757d;
          margin-left: 0.5rem;
        }
        .badge-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .gallery-row-hover .custom-card:not(.custom-card-hovered) {
          filter: blur(3px) brightness(0.7);
        }
        .gallery-row-hover .custom-card-hovered {
          filter: none;
          z-index: 2;
        }
        .wall-of-trust {
          background: #202124;
          border-radius: 18px;
          padding: 2.5rem 1.5rem;
          margin-bottom: 3rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        }
        .wall-heading {
          font-size: 2rem;
          font-weight: 700;
          color:  #217953;
          margin-bottom: 1.5rem;
          text-align: center;
          letter-spacing: 0.5px;
        }
        .client-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2.5rem;
          align-items: center;
        }
        .client-logo-img {
          height: 206px;
          width: auto;
          filter: grayscale(1) brightness(1.2);
          opacity: 0.85;
          transition: filter 0.2s, opacity 0.2s, transform 0.2s;
        }
        .client-logo-img:hover {
          filter: none;
          opacity: 1;
          transform: scale(1.07);
        }
      `}</style>
      <div className="container">
        <div className="row align-items-center mb-25">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                Explore Our Work
              </h4>
            </div>
          </div>
        </div>

        <div
          className={`row${hoveredCard ? " gallery-row-hover" : ""}`}
        >
          {galleryItems.length === 0 && (
            <div className="col-12 text-center text-muted py-5">
              No projects found.
            </div>
          )}
          {galleryItems.map(item => (
            <div key={item.id} className="col-md-4 col-sm-6 mb-4">
              <a href={item.url}>
              <div
                className={`card h-100 shadow-sm custom-card${
                  hoveredCard === item.id ? " custom-card-hovered" : ""
                }`}
                style={{
                  ...cardStyles,
                  ...(hoveredCard === item.id ? cardHoverStyles : {}),
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {item.type === "image" && (
                  <div style={imgBoxStyles}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top custom-img"
                      style={imgStyles}
                    />
                  </div>
                )}
                <div className="card-body">
                  <h5 className="card-title mb-2">{item.title}</h5>
                  <div className="badge-group mb-2">
                    {item.services.map(service => (
                      <span key={service} className="custom-badge" style={{background: "rgb(117, 218, 180);"}}>
                        {service}
                      </span>
                    ))}
                    {item.industries.length > 0 &&
                      item.services.length > 0 && (
                        <span
                          style={{
                            width: "12px",
                            display: "inline-block",
                          }}
                        />
                      )}
                    {item.industries.map(industry => (
                      <span
                        key={industry}
                        className="custom-badge secondary"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsDescription;
