import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Split from "../Split";
import CalendlyWidget from "../CalendlyWidget";

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  React.useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.style.zIndex = isModalOpen ? "0" : "999";
    return () => {
      if (navbar) navbar.style.zIndex = "999";
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>
                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  onSubmit={async (values, { resetForm }) => {
                    try {
                      const res = await axios.post("/api/contact", values);
                      if (res.data.success) {
                        messageRef.current.innerText =
                          "Your message has been successfully sent. We will contact you soon.";
                        resetForm();
                        setTimeout(() => {
                          messageRef.current.innerText = "";
                        }, 3000);
                      } else {
                        messageRef.current.innerText = "Failed to send message.";
                      }
                    } catch (err) {
                      console.error("API error:", err);
                      messageRef.current.innerText =
                        "Server error. Please try again later.";
                    }
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>
                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className={`btn-curve ${
                            theme === "dark" ? "btn-lit" : "btn-color"
                          } disabled custom-hover-btn`}
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="mailto:praveen@thriftizer.com">
                      praveen@thriftizer.com
                    </a>
                  </h5>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h6>
                    24/D, 4th Floor, Friends Colony,
                    <br />
                    560068 Bangalore KA, India
                  </h6>
                </div>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Follow Us.
                  </h3>
                </Split>
                <div className="social-icon mb-40">
                  <a href="https://www.facebook.com/thriftizer/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/thriftizer/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/thriftizersolutionsllp"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>

                <div className="button pt-6" style={{ display: "flex", marginTop: "10px" }}>
                  <a
                    href="https://api.whatsapp.com/send/?phone=918861324254&text=Hello&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-curve ${
                      theme === "dark" ? "btn-lit" : "btn-color"
                    } mr-3 custom-hover-btn`}
                  >
                    <span>Book a Call</span>
                  </a>

                  <a
                    href="/build_your_own_package"
                    rel="noopener noreferrer"
                    className={`btn-curve ${
                      theme === "dark" ? "btn-lit" : "btn-color"
                    } custom-hover-btn`}
                  >
                    <span>Start a Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {isModalOpen && (
        <div className="calendly-modal-overlay" onClick={handleModalClick}>
          <div className="calendly-modal">
            <div className="calendly-modal-header">
              <h3>Book a Call</h3>
              <button
                className="calendly-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="calendly-modal-content">
              <CalendlyWidget />
            </div>
          </div>
        </div>
      )}

      {/* Google Map */}
      <div className="map" id="ieatmaps">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.354192784659!2d-121.48276012568338!3d38.57169066585917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad1377eabbaf3%3A0x6aad02473cddd84c!2s2108%20N%20St%2C%20Sacramento%2C%20CA%2095816%2C%20USA!5e0!3m2!1sen!2sin!4v1751541800419!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Footer */}
      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              {/* © 2022, Avo Template. Made with passion by{" "} */}
              <a href="">@Thriftizer</a>.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .custom-hover-btn span {
          transition: color 0.2s;
        }
        .custom-hover-btn:hover span {
          color: #000 !important;
        }

        /* Modal Styles */
        .calendly-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          box-sizing: border-box;
        }

        .calendly-modal {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: modalSlideIn 0.3s ease-out;
        }

        .calendly-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .calendly-modal-header h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
        }

        .calendly-modal-close {
          background: none;
          border: none;
          font-size: 24px;
          font-weight: bold;
          color: #6b7280;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s ease;
          line-height: 1;
        }

        .calendly-modal-close:hover {
          background-color: #f3f4f6;
          color: #374151;
        }

        .calendly-modal-content {
          height: 600px;
          overflow: hidden;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .calendly-modal {
            margin: 10px;
            max-height: 85vh;
          }
          
          .calendly-modal-content {
            height: 500px;
          }
          
          .calendly-modal-header {
            padding: 16px 20px;
          }
          
          .calendly-modal-header h3 {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .calendly-modal-overlay {
            padding: 10px;
          }
          
          .calendly-modal {
            margin: 0;
            border-radius: 8px;
          }
          
          .calendly-modal-content {
            height: 450px;
          }
          
          .calendly-modal-header {
            padding: 12px 16px;
          }
          
          .calendly-modal-header h3 {
            font-size: 1.125rem;
          }
        }

        /* Ensure Calendly widget is responsive within modal */
        .calendly-modal-content > div {
          height: 100% !important;
        }
      `}</style>
    </>
  );
};

export default ContactWithMap;