import React from "react";
import Split from "../Split";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const ContactSection = () => {
  const messageRef = React.useRef(null);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ) {
      error = "Invalid email address";
    }
    return error;
  }

  return (
    <section className="contact-sec section-padding">
      <div className="container">
        <div className="sec-head text-center">
          <h6 style={{ letterSpacing: "normal", textTransform: "none" }}>
            Get in touch
          </h6>
          <Split>
            <h3 style={{ letterSpacing: "normal", textTransform: "none" }}>
              Contact &nbsp;Us.
            </h3>
          </Split>
          <span className="tbg" style={{ letterSpacing: "normal", textTransform: "none" }}>
            Contact
          </span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
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
                    console.error(err);
                    messageRef.current.innerText =
                      "Server error. Please try again later.";
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                              style={{
                                letterSpacing: "normal",
                                textTransform: "none",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_email"
                              type="email"
                              name="email"
                              validate={validateEmail}
                              placeholder="Email"
                              required="required"
                              style={{
                                letterSpacing: "normal",
                                textTransform: "none",
                              }}
                            />
                            {errors.email && touched.email && (
                              <div style={{ color: "red" }}>{errors.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                              style={{
                                letterSpacing: "normal",
                                textTransform: "none",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="simple-btn custom-font cursor-pointer"
                              style={{
                                letterSpacing: "normal",
                                textTransform: "none",
                              }}
                            >
                              <span>Send message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
