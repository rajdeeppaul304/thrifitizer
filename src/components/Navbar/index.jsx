/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleMobileDropdown, handleSearch } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    handleSearch();
  }, []);
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
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" style={{ width: "80px" }} />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" style={{ width: "80px" }} />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" style={{ width: "80px" }} />
            )}
          </a>
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
              <Link href="/contact/" legacyBehavior>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                  alert(JSON.stringify(values, null, 2));
                  resetForm();
                }}
              >
                {() => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
