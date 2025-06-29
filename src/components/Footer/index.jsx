/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = ({ noSubBG, isBuildYourPackage = false }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const footerStyles = {
    fontSize: "1rem",
    lineHeight: "1.6",
    letterSpacing: "normal",
    textTransform: "none",
  };
  const headingStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textTransform: "none",
    letterSpacing: "normal",
  };
  const subHeadingStyle = {
    fontSize: isBuildYourPackage ? "1.6rem" : "1.1rem", // Bigger if isBuildYourPackage
    fontWeight: "bold",
    marginBottom: "0.75rem",
    textTransform: "none",
    letterSpacing: "normal",
  };
  const logoImgStyle = {
    width: "120px",
    height: "auto",
    display: "block",
  };
  const iconStyle = {
    fontSize: isBuildYourPackage ? "2em" : "1.3rem",
  };

  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <footer
      className={`footer-half ${noSubBG ? "" : "sub-bg"} section-padding pb-0`}
      style={footerStyles}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo" style={{ marginBottom: "1.5rem" }}>
                <a href="#0">
                  <img
                    src={`${appData.lightLogo}`}
                    alt="logo"
                    className="logo-img"
                    style={logoImgStyle}
                  />
                </a>
              </div>

              <div className="con-info custom-font">
                <ul style={{ fontSize: "1rem", letterSpacing: "normal" }}>
                  {/* Only show if NOT isBuildYourPackage */}
                  {!isBuildYourPackage && (
                    <>
                      <li>
                        <span style={{ fontWeight: "bold" }}>Email: </span> praveen@thriftizer.com
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold" }}>Phone: </span> +91 8861324254
                      </li>
                                        <li>
                    <span style={{ fontWeight: "bold" }}>Address: </span> 24/D, 4th Floor, Friends colony, 560068 Bangalore KA, India
                  </li>
                    </>
                  )}

                </ul>
              </div>

<div className="social-icon" style={{ marginTop: "2rem" }}>
  <h3 className="custom-font stit simple-btn" style={subHeadingStyle}>Follow us</h3>
  <div className="social">
    <a href="https://www.facebook.com/thriftizer/" className="icon" style={{ marginRight: "1rem" }}>
      <i
        className="fab fa-facebook-f"
        style={{ fontSize: isBuildYourPackage ? "1.8rem" : "1.3rem" }}
      ></i>
    </a>
    <a href="https://www.linkedin.com/company/thriftizer/" className="icon" style={{ marginRight: "1rem" }}>
      <i
        className="fab fa-linkedin"
        style={{ fontSize: isBuildYourPackage ? "1.8rem" : "1.3rem" }}
      ></i>
    </a>
    <a href="https://www.instagram.com/thriftizersolutionsllp" className="icon" style={{ marginRight: "1rem" }}>
      <i
        className="fab fa-instagram"
        style={{ fontSize: isBuildYourPackage ? "1.8rem" : "1.3rem" }}
      ></i>
    </a>
  </div>
</div>

            </div>
          </div>

          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h3 className="custom-font stit simple-btn" style={subHeadingStyle}>Newsletter</h3>
              <p style={{ fontSize: "1rem" }}>Sign up for our newsletter!</p>
              <Formik
                initialValues={{ subscribe: "" }}
                onSubmit={async (values, { resetForm }) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font" style={{ fontSize: "1rem" }}>
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your email"
                        style={{
                          fontSize: "1rem",
                          padding: "0.5rem 1rem",
                          marginRight: "1rem",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                          letterSpacing: "normal",
                          textTransform: "none",
                        }}
                      />
                      <button
                        className="cursor-pointer"
                        style={{
                          fontSize: "1rem",
                          padding: "0.5rem 1.5rem",
                          borderRadius: "4px",
                          background: "#222",
                          color: "#fff",
                          border: "none",
                          fontWeight: "bold",
                          marginLeft: "0.5rem",
                          letterSpacing: "normal",
                          textTransform: "none",
                        }}
                      >
                        Subscribe
                      </button>
                      {errors.subscribe && touched.subscribe && (
                        <div style={{ color: "red", marginTop: "0.5rem" }}>{errors.subscribe}</div>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className="copyrights text-center" style={{ fontSize: "1rem", marginTop: "2rem", letterSpacing: "normal" }}>
          <p>© 2025 Thriftizer Solutions LLP.</p>
        </div>
      </div>

      <script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>
    </footer>
  );
};

export default Footer;
