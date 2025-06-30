/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown, handleSearch } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  // React.useEffect(() => {
  //   handleSearch();
  // }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <style jsx>{`
        .navbar-nav .nav-link:hover,
        .search .icon:hover,
        .search-form .close:hover {
          color: #217953 !important;
        }
      `}</style>
      <div className="container" style={{maxWidth:'1300px'}}>
        <Link href="/" legacyBehavior>
<div className="logo-group d-flex align-items-center">
  <a className="logo mr-2" style={{ width: "90px" , marginRight:'45px'}}>
    {theme ? (
      theme === "themeL" ? (
        <img ref={lr} src={appData.darkLogo} alt="logo" style={{ width: "100px" , marginRight:'45px'}} />
      ) : (
        <img ref={lr} src={appData.lightLogo} alt="logo" style={{ width: "100px", marginRight:'45px' }} />
      )
    ) : (
      <img ref={lr} src={appData.lightLogo} alt="logo" style={{ width: "100px", marginRight:'45px' }} />
    )}
  </a>

  {/* <a className="logo">
    {theme ? (
      theme === "themeL" ? (
        <img src={appData.darkLogo2} alt="logo 2" style={{ width: "100px", marginRight:'25px' }} />
      ) : (
        <img src={appData.lightLogo2} alt="logo 2" style={{ width: "100px", marginRight:'25px' }} />
      )
    ) : (
      <img src={appData.lightLogo2} alt="logo 2" style={{ width: "100px", marginRight:'25px' }} />
    )}
  </a> */}
</div>

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/home/" legacyBehavior>
                <a className="nav-link">Home</a>
              </Link>
            </li>
                        {/* <li className="nav-item dropdown" onClick={handleDropdown}>
                          <span
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Services
                          </span>
                          <div className="dropdown-menu">
                            <Link href="/services/360_degree_marketing">
                              <a className="dropdown-item">360 Degree Marketing</a>
                            </Link>
                            <Link href="/services/brand_strategy">
                              <a className="dropdown-item">Brand Strategy</a>
                            </Link>
                            <Link href="/services/email_marketing">
                              <a className="dropdown-item">Email Marketing</a>
                            </Link>
                            <Link href="/services/influencer_affiliate">
                              <a className="dropdown-item">Influencer Affiliate</a>
                            </Link>
                            <Link href="/services/seo_content">
                              <a className="dropdown-item">Seo Content</a>
                            </Link>
                            <Link href="/services/social_media_management">
                              <a className="dropdown-item">Social Media Management</a>
                            </Link>
                          </div>
                        </li> */}
            {/* <li className="nav-item">
              <Link href="/works3/works3-dark/" legacyBehavior>
                <a className="nav-link">Services</a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/about/" legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/project-details/" legacyBehavior>
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/moodboard/" legacyBehavior>
                <a className="nav-link">Moodboard</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/build_your_own_package/" legacyBehavior>
                <a className="nav-link">Package Builder</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/career/" legacyBehavior>
                <a className="nav-link">Career</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/" legacyBehavior>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="icons_ search"
          style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center'
          }}    
          >
          <a href="https://www.facebook.com/thriftizer/">
            <i className="  fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/company/thriftizer/">
            <i className=" fab fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/thriftizersolutionsllp">
            <i className="fab fa-instagram"></i>
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
