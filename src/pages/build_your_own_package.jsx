import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import MinimalArea from "../components/Minimal-area";
import Navbar from "../components/Navbar";
import Services4 from "../components/Services4";
import SkillsCircle from "../components/Skills-circle";
import Team1 from "../components/Team1";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import DarkTheme from "../layouts/Dark";

const SERVICES = [
  { name: 'Web Development', price: 30000 },
  { name: 'SEO Optimization', price: 15000 },
  { name: 'Graphic Design', price: 10000 },
  { name: 'Social Media Marketing', price: 20000 },
  { name: 'Content Writing', price: 12000 },
];

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/Banner/aboutpage.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Build Your Package</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ContactUs = () => {
  const form = useRef();
  const [selectedServices, setSelectedServices] = useState([]);
  const [budget, setBudget] = useState(50000);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServiceChange = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((name) => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, name) => {
      const service = SERVICES.find((s) => s.name === name);
      return total + (service ? service.price : 0);
    }, 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) {
      alert('Form not ready. Please try again.');
      return;
    }

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const mobile = form.current.mobile_number.value;
    const selectedServicesStr = selectedServices.join(', ');
    const actualQuote = calculateTotal();

    console.log({
      name,
      email,
      mobile,
      selectedServices,
      budget,
      actualQuote,
    });

    const message = `
      Hi ${name},

      You selected the following services: ${selectedServicesStr}
      Your estimated budget was ₹${budget.toLocaleString()}.
      Our estimated cost for these services is ₹${actualQuote.toLocaleString()}.

      Thank you!
    `;

    const formData = {
      user_name: name,
      user_email: email,
      mobile_number: mobile,
      services: selectedServicesStr,
      estimated_budget: budget,
      company_quote: actualQuote,
      message,
    };

    emailjs
      .send('service_s81entoa', 'template_3ehv0hl', formData, {
        publicKey: '2WE3zGFVTDRp2CQWA',
      })
      .then(() => {
        alert('You will recieve a Email shortly!');
        console.log('Email sent successfully');
      })
      .catch((error) => {
        alert('Error Try again after sometime.');
        console.error('Email failed...', error.text);
      });
  };

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <AboutHeader />
      
      <style jsx>{`
        .contact-section {
          background: #0f1419;
          padding: 100px 0;
          min-height: 100vh;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        
        .contact-info {
          padding-right: 20px;
        }
        
        .contact-info h2 {
          color: #ffffff;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #64ffda, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-info p {
          color: #8892b0;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          padding: 20px;
          background: rgba(100, 255, 218, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(100, 255, 218, 0.1);
          transition: all 0.3s ease;
        }
        
        .info-item:hover {
          background: rgba(100, 255, 218, 0.1);
          border-color: rgba(100, 255, 218, 0.3);
          transform: translateX(10px);
        }
        
        .info-icon {
          width: 24px;
          height: 24px;
          margin-right: 16px;
          color: #64ffda;
        }
        
        .info-text {
          color: #ccd6f6;
          font-size: 16px;
        }
        
        .contact-form {
          background: rgba(23, 42, 69, 0.4);
          padding: 48px;
          border-radius: 20px;
          border: 1px solid rgba(100, 255, 218, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .form-group {
          margin-bottom: 32px;
        }
        
        .form-label {
          display: block;
          color: #ccd6f6;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .form-input {
          width: 100%;
          padding: 16px 20px;
          background: rgba(15, 20, 25, 0.8);
          border: 2px solid rgba(100, 255, 218, 0.2);
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .form-input:focus {
          border-color: #64ffda;
          box-shadow: 0 0 0 4px rgba(100, 255, 218, 0.1);
          background: rgba(15, 20, 25, 1);
        }
        
        .form-input::placeholder {
          color: #8892b0;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 12px;
        }
        
        .service-item {
          display: flex;
          align-items: center;
          padding: 16px;
          background: rgba(15, 20, 25, 0.6);
          border: 2px solid rgba(100, 255, 218, 0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .service-item:hover {
          border-color: rgba(100, 255, 218, 0.3);
          background: rgba(15, 20, 25, 0.8);
        }
        
        .service-item.selected {
          border-color: #64ffda;
          background: rgba(100, 255, 218, 0.1);
        }
        
        .service-checkbox {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(100, 255, 218, 0.3);
          border-radius: 4px;
          margin-right: 12px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .service-checkbox:checked {
          background: #64ffda;
          border-color: #64ffda;
        }
        
        .service-checkbox:checked::after {
          content: '✓';
          position: absolute;
          top: -2px;
          left: 3px;
          color: #0f1419;
          font-weight: bold;
          font-size: 14px;
        }
        
        .service-label {
          color: #ccd6f6;
          font-size: 14px;
          font-weight: 500;
          flex: 1;
        }
        
        .service-price {
          color: #64ffda;
          font-size: 14px;
          font-weight: 600;
        }
        
        .budget-container {
          margin-top: 12px;
        }
        
        .budget-display {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding: 16px 20px;
          background: rgba(15, 20, 25, 0.6);
          border-radius: 12px;
          border: 2px solid rgba(100, 255, 218, 0.1);
        }
        
        .budget-label {
          color: #ccd6f6;
          font-size: 16px;
        }
        
        .budget-value {
          color: #64ffda;
          font-size: 24px;
          font-weight: 700;
        }
        
        .budget-slider {
          width: 100%;
          height: 8px;
          background: rgba(100, 255, 218, 0.1);
          border-radius: 4px;
          outline: none;
          appearance: none;
          cursor: pointer;
        }
        
        .budget-slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #64ffda;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(100, 255, 218, 0.3);
          transition: all 0.3s ease;
        }
        
        .budget-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 12px rgba(100, 255, 218, 0.5);
        }
        
        .quote-summary {
          margin-top: 24px;
          padding: 24px;
          background: rgba(100, 255, 218, 0.05);
          border: 2px solid rgba(100, 255, 218, 0.2);
          border-radius: 12px;
        }
        
        .quote-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .quote-row:last-child {
          margin-bottom: 0;
          padding-top: 12px;
          border-top: 1px solid rgba(100, 255, 218, 0.2);
        }
        
        .quote-label {
          color: #8892b0;
          font-size: 14px;
        }
        
        .quote-value {
          color: #ccd6f6;
          font-size: 16px;
          font-weight: 600;
        }
        
        .quote-total {
          color: #64ffda !important;
          font-size: 20px !important;
          font-weight: 700 !important;
        }
        
        .submit-btn {
          width: 100%;
          padding: 18px 32px;
          background: linear-gradient(135deg, #64ffda, #00bcd4);
          border: none;
          border-radius: 12px;
          color: #0f1419;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 32px;
          position: relative;
          overflow: hidden;
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .submit-btn:hover::before {
          left: 100%;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(100, 255, 218, 0.3);
        }
        
        .submit-btn:active {
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .contact-info {
            padding-right: 0;
            text-align: center;
          }
          
          .contact-info h2 {
            font-size: 36px;
          }
          
          .contact-form {
            padding: 32px 24px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .budget-display {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-container {
            padding: 0 16px;
          }
          
          .contact-info h2 {
            font-size: 28px;
          }
          
          .contact-form {
            padding: 24px 16px;
          }
        }
      `}</style>
      
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's Build Something Amazing Together</h2>
              <p>
                Ready to transform your vision into reality? Our team of experts is here to help you create digital experiences that make an impact. Get in touch and let's discuss your project.
              </p>
              
              <div className="info-item">
                <svg className="info-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="info-text">+91 8861324254</span>
              </div>
              
              <div className="info-item">
                <svg className="info-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="info-text">praveen@thriftizer.com</span>
              </div>
              
              <div className="info-item">
                <svg className="info-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="info-text">Bangalore KA, India</span>
              </div>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  className="form-input"
                  placeholder="Enter your full name"
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  name="user_email" 
                  className="form-input"
                  placeholder="Enter your email address"
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input 
                  type="tel" 
                  name="mobile_number" 
                  className="form-input"
                  placeholder="Enter your mobile number"
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Select Services</label>
                <div className="services-grid">
                  {SERVICES.map((service) => (
                    <div 
                      key={service.name} 
                      className={`service-item ${selectedServices.includes(service.name) ? 'selected' : ''}`}
                      onClick={() => handleServiceChange(service.name)}
                    >
                      <input
                        type="checkbox"
                        className="service-checkbox"
                        name="services"
                        value={service.name}
                        checked={selectedServices.includes(service.name)}
                        onChange={() => handleServiceChange(service.name)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="service-label">{service.name}</span>
                      {/* <span className="service-price">₹{service.price.toLocaleString()}</span> */}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Budget</label>
                <div className="budget-container">
                  <div className="budget-display">
                    <span className="budget-label">Your Budget Range</span>
                    <span className="budget-value">₹{budget.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    name="estimated_budget"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="budget-slider"
                  />
                </div>
              </div>

              {selectedServices.length > 0 && (
                <div className="quote-summary">
                  <div className="quote-row">
                    <span className="quote-label">Selected Services</span>
                    <span className="quote-value">{selectedServices.length} item(s)</span>
                  </div>
                  <div className="quote-row">
                    <span className="quote-label">Your Budget</span>
                    <span className="quote-value">₹{budget.toLocaleString()}</span>
                  </div>
                  <div className="quote-row">
                    <span className="quote-label">Our Estimated Cost</span>
                    <span className="quote-value quote-total">₹{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              )}

              <button type="submit" className="submit-btn">
                Get Your Quote
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </DarkTheme>
  );
};

export default ContactUs;