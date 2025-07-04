/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const Footer = ({ noSubBG, isBuildYourPackage = false }) => {
  const footerStyles = {
    fontSize: "1rem",
    lineHeight: "1.6",
    letterSpacing: "normal",
    textTransform: "none",
    backgroundColor: "#151921",
    color: "#ffffff",
  };
  
  const headingStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    color: "#75DAB4",
  };
  
  const logoImgStyle = {
    width: "120px",
    height: "auto",
    display: "block",
  };
  
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.95rem",
    lineHeight: "1.8",
    transition: "color 0.3s ease",
  };
  
  const iconStyle = {
    fontSize: "1.2rem",
    color: "#75DAB4",
    marginRight: "1rem",
    transition: "color 0.3s ease",
  };

  return (
    <footer
      className="footer-half section-padding pb-0"
      style={footerStyles}
    >
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="cont">
              <div className="logo" style={{ marginBottom: "1.5rem", display: 'flex', alignItems:'center'}}>
                <a href="/">
                  <img
                    src={`${appData.lightLogo}`}
                    alt="logo"
                    className="logo-img"
                    style={logoImgStyle}
                  />
                </a>
                {/* <a target="_blank" href="https://www.shopify.com/partners/directory/partner/thriftizer-solutions">
                  <img
                    src={`${appData.lightLogo2}`}
                    alt="logo"
                    className="logo-img"
                    style={logoImgStyle}
                  />
                </a> */}
              </div>
              
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#ffffff", marginBottom: "1.5rem" }}>
                Thriftizer gives you the tools and solutions you need to create 
                truly professional e-commerce experiences.
              </p>
              
              {/* Social Icons */}
              <div className="social-icon">
                <div className="social">
                  <a href="https://www.facebook.com/thriftizer/" className="icon" style={iconStyle}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/thriftizer/" className="icon" style={iconStyle}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/thriftizersolutionsllp" className="icon" style={iconStyle}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6 col-6 mb-4">
            <div className="footer-links">
              <h3 className="custom-font" style={headingStyle}>Company</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/about" style={linkStyle}>About</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/project-details" style={linkStyle}>Portfolio</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/contact" style={linkStyle}>Contact</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/career" style={linkStyle}>Career</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Help Links */}
          <div className="col-lg-2 col-md-6 col-6 mb-4">
            <div className="footer-links">
              <h3 className="custom-font" style={headingStyle}>Legal</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/legal/contac_info" style={linkStyle}>Contact Info</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/legal/tos" style={linkStyle}>Terms & Conditions</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/legal/policy" style={linkStyle}>Privacy Policy</a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="/legal/refund" style={linkStyle}>Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-links">
              <h3 className="custom-font" style={headingStyle}>Contact Info</h3>
              <div className="con-info custom-font">
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <span style={{ fontWeight: "bold", color: "#fff" }}>Email: &nbsp;</span>
                    <a href="mailto:praveen@thriftizer.com" style={{ color: "#ffffff", textDecoration: "none" }}>
                      praveen@thriftizer.com
                    </a>
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <span style={{ fontWeight: "bold", color: "#fff" }}>Phone: &nbsp;</span>
                    <a href="tel:+918861324254" style={{ color: "#ffffff", textDecoration: "none" }}>
                      +91 8861324254
                    </a>
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <span style={{ fontWeight: "bold", color: "#fff" }}>Address: &nbsp;</span>
                    24/D, 4th Floor, Friends colony, 560068 Bangalore KA, India
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <span style={{ fontWeight: "bold", color: "#fff" }}>Address (USA): &nbsp;</span>
                    2108 N ST STE N, Sacramento, CA - 95816
                    
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>
                    <span style={{ fontWeight: "bold", color: "#fff" }}>Phone (USA): &nbsp;</span>
                     +1 (628) 800-6680
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12">
            <div 
              className="copyrights text-center" 
              style={{ 
                fontSize: "0.9rem", 
                marginTop: "2rem", 
                paddingTop: "2rem", 
                borderTop: "1px solid #2a2f3a",
                letterSpacing: "normal",
                color: "#ffffff"
              }}
            >
              <p style={{ margin: 0 }}>© 2025 Thriftizer Solutions LLP. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>
    </footer>
  );
};

export default Footer;