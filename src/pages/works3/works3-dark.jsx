import React from "react";
import DarkTheme from "../../layouts/Dark";
import addParlx from "../../common/addParlx";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/Small-footer";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";

// Example images (replace with your own or use Unsplash/placeholder URLs)
const serviceImages = [
  "/img/company/HTRZ.jpg",
  "/img/company/IMG-20250620-WA0035.jpg",
  "/img/company/Mivi.jpg",
  "/img/company/IMG-20250621-WA0006.jpg",
  "/img/company/Watch.jpg",
  "/img/company/IMG-20250621-WA0004.jpg",
  "/img/company/IMG-20250620-WA0018.jpg",
];

const services = [
  {
    title: "Shopify Store Setup & Customization",
    desc: "Get a high-converting Shopify or Shopify Plus store tailored to your brand and business needs.",
  },
  {
    title: "Theme Development & Optimization",
    desc: "Custom themes that are fast, mobile-friendly, and built to convert.",
  },
  {
    title: "Migration to Shopify",
    desc: "Seamlessly move your existing store to Shopify with zero data loss and downtime.",
  },
  {
    title: "App Integration & Custom Features",
    desc: "Add the right tools — from CRMs to subscription models — with custom app setup and coding.",
  },
  {
    title: "UI/UX Design & Branding",
    desc: "Stunning interfaces backed by smart user journeys, optimized for trust and conversion.",
  },
  {
    title: "Growth Marketing (SEO + Ads)",
    desc: "Reach the right audience through search engine optimization and targeted ad campaigns.",
  },
  {
    title: "Performance Audits & CRO",
    desc: "Identify gaps, optimize flows, and improve your store’s conversion rate through detailed audits.",
  },
];

const addOns = [
  "Ongoing store maintenance & updates",
  "Shopify Plus upgrades",
  "Multilingual/store region setups",
  "Influencer & affiliate marketing setup",
  "Email marketing integration (Klaviyo, Mailchimp)",
];

const industries = [
  "Fashion & Apparel",
  "Health & Wellness",
  "Home & Decor",
  "Electronics",
  "Lifestyle & D2C Products",
];

const Works3Dark = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (fixedHeader.current) {
          var slidHeight = fixedHeader.current.offsetHeight;
          if (MainContent.current) {
            MainContent.current.style.marginTop = slidHeight + "px";
          }
        }
      }, 0);
    });
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
        style={{
          background:
            "linear-gradient(rgba(20,20,20,0.7),rgba(20,20,20,0.7)), url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80') center/cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font" style={{ fontWeight: 700, fontSize: "2.5rem" }}>
                    E-commerce Solutions That Drive Real Growth
                  </h2>
                  <p style={{ fontSize: "1.2rem", color: "#ddd" }}>
                    From first-click to final checkout, we help brands build, launch, and scale successful Shopify stores — with strategies tailored to perform.
                  </p>
                </div>
                <div className="bactxt custom-font valign">
                  <span className="full-width">Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        {/* Section 2: What We Offer */}
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center mb-40">
              <div className="col-lg-8 text-center">
                <h3 className="custom-font mb-10" style={{ fontWeight: 600 }}>
                  Our Core Services
                </h3>
                <p className="fz-18">
                  End-to-end solutions designed to grow your brand, boost your conversions, and simplify your e-commerce journey.
                </p>
              </div>
            </div>
            <div className="row">
              {services.map((service, idx) => (
                <div className="col-md-6 col-lg-4 mb-40 d-flex" key={idx}>
                  <div
                    className="item-box flex-fill d-flex flex-column align-items-center"
                    style={{
                      background: "#23272f",
                      borderRadius: "16px",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                      padding: "24px",
                      textAlign: "center",
                      transition: "transform 0.2s",
                      height: "100%",
                      minHeight: "340px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img
                      src={serviceImages[idx % serviceImages.length]}
                      alt={service.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginBottom: "18px",
                        border: "3px solid #fff",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      }}
                    />
                    <h5 className="mb-10" style={{ fontWeight: 600 }}>{service.title}</h5>
                    <p style={{ color: "#bbb", flexGrow: 1 }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Work With Us */}
        <section className="section-padding bg-dark">
          <div className="container">
            <div className="row justify-content-center mb-30">
              <div className="col-lg-8 text-center">
                <h3 className="custom-font mb-10" style={{ fontWeight: 600 }}>
                  We’re Not Just Builders. We’re Growth Partners.
                </h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <ul className="list-style" style={{ fontSize: "1.1rem", color: "#eee" }}>
                  <li>
                    <span role="img" aria-label="check" style={{ color: "#00e676", marginRight: 8 }}>✔️</span>
                    4,000+ Shopify Stores Delivered
                  </li>
                  <li>
                    <span role="img" aria-label="check" style={{ color: "#00e676", marginRight: 8 }}>✔️</span>
                    Custom solutions, not templates
                  </li>
                  <li>
                    <span role="img" aria-label="check" style={{ color: "#00e676", marginRight: 8 }}>✔️</span>
                    Focused on ROI, not vanity metrics
                  </li>
                  <li>
                    <span role="img" aria-label="check" style={{ color: "#00e676", marginRight: 8 }}>✔️</span>
                    Long-term client partnerships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Add-on Services */}
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center mb-30">
              <div className="col-lg-8 text-center">
                <h3 className="custom-font mb-10" style={{ fontWeight: 600 }}>
                  Add-On Support for Your Scaling Needs
                </h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ul className="list-style" style={{ fontSize: "1.1rem" }}>
                  {addOns.map((item, idx) => (
                    <li key={idx}>
                      <span role="img" aria-label="plus" style={{ color: "#2196f3", marginRight: 8 }}>➕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Industry Coverage */}
        <section className="section-padding bg-dark">
          <div className="container">
            <div className="row justify-content-center mb-30">
              <div className="col-lg-8 text-center">
                <h3 className="custom-font mb-10" style={{ fontWeight: 600 }}>
                  Industries We’ve Worked With
                </h3>
                <p>We’ve successfully launched stores in:</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {industries.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#23272f",
                        color: "#fff",
                        borderRadius: "24px",
                        padding: "12px 28px",
                        margin: "8px",
                        fontWeight: 500,
                        fontSize: "1.05rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                        display: "inline-block",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center mb-30">
              <div className="col-lg-8 text-center">
                <h3 className="custom-font mb-10" style={{ fontWeight: 700 }}>
                  Let’s Build Something That Converts
                </h3>
                <p style={{ fontSize: "1.1rem" }}>
                  Whether you’re starting fresh or scaling fast, our team is ready to help you turn browsers into buyers.
                </p>
                <div className="mt-30">
                  <a
                    href="mailto:hello@youragency.com"
                    className="butn butn-bg"
                    style={{
                      background: "#75dab4;",
                      color: "#fff",
                      borderRadius: "30px",
                      padding: "12px 32px",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                      margin: "0 8px",
                      display: "inline-block",
                    }}
                  >
                    <span>Book a Free Consultation</span>
                  </a>
                  <div className="mt-10">
                    <a href="mailto:hello@youragency.com" className="fz-16" style={{ color: "#75dab4;" }}>
                      praveen@thriftizer.com
                    </a>
                  </div>
                  <div className="mt-20">
                    <a
                      href="#"
                      className="butn butn-bg"
                      style={{
                        background: "#23272f",
                        color: "#75dab4",
                        borderRadius: "30px",
                        padding: "12px 32px",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        margin: "0 8px",
                        display: "inline-block",
                        border: "2px solid #75dab4;",
                      }}
                    >
                      <span>Let’s Get Started &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section (kept from original) */}
        <PortfolioCustomColumn column={2} hideFilter hideSectionTitle />
        <SmallFooter />
      </div>
      {/* Extra styles for better UI */}
      <style>{`
        .item-box:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(33,150,243,0.12);
        }
        .list-style {
          list-style: none;
          padding-left: 0;
        }
        .list-style li {
          margin-bottom: 14px;
          display: flex;
          align-items: center;
        }
        @media (max-width: 991px) {
          .item-box {
            margin-bottom: 32px;
          }
        }
      `}</style>
    </DarkTheme>
  );
};

export default Works3Dark;
