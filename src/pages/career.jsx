import React, { useRef, useEffect, useState } from "react";
import Head from 'next/head';
import Footer from "../components/Footer";
import IntroWithSlider1 from "../components/Intro-with-slider1";
import Navbar from "../components/Navbar";
import DarkTheme from "../layouts/Dark";
import CareerHeader from "../components/career_info"
import AboutHeader from "../components/carrer_header";

const Career = () => {
  const fixedSlider = useRef(null);
  const mainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aboutYourself: '',
    githubLink: '',
    portfolioLink: '',
    linkedinLink: '',
    otherLinks: ''
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const adjustMargin = () => {
      if (fixedSlider.current && mainContent.current) {
        const slidHeight = fixedSlider.current.offsetHeight;
        mainContent.current.style.marginTop = slidHeight + "px";
      }
    };

    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    adjustMargin();
    handleScroll();

    const intervalId = setInterval(adjustMargin, 1000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is PDF
      if (file.type !== 'application/pdf') {
        alert('Please upload only PDF files');
        e.target.value = '';
        return;
      }
      // Check file size (10MB limit for email)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size should be less than 10MB');
        e.target.value = '';
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.aboutYourself || !resume) {
      setSubmitStatus('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append('resume', resume);

      const response = await fetch('/api/career_post', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('Application submitted successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          aboutYourself: '',
          githubLink: '',
          portfolioLink: '',
          linkedinLink: '',
          otherLinks: ''
        });
        setResume(null);
        document.getElementById('resume').value = '';
      } else {
        setSubmitStatus(result.error || 'Failed to submit application');
      }
    } catch (error) {
      setSubmitStatus('Network error. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <DarkTheme>
      <Head>
        <link rel="icon" href="/img/logo/logoh.png" />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <AboutHeader />

      <div ref={mainContent} className="main-content">
        <div className="page-header">
          <div className="" style={{marginTop:'100px'}}>
            <CareerHeader/>
            <section className="career-section" style={{ padding: '80px 0', minHeight: '100vh' }}>
              <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h1 style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: 'bold', 
                    background: 'linear-gradient(135deg, #75dab4, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '20px'
                  }}>
                    Join Our Team
                  </h1>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    color: '#ffffff', 
                    opacity: '0.8',
                    lineHeight: '1.6'
                  }}>
                    Ready to make an impact? We're looking for passionate individuals to join our growing team.
                  </p>
                </div>

                {/* Career Form */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(117, 218, 180, 0.1), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(117, 218, 180, 0.2)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* Name */}
                      <div className="col-md-6" style={{ marginBottom: '25px' }}>
                        <label style={{ 
                          display: 'block', 
                          color: '#75dab4', 
                          fontWeight: '600',
                          marginBottom: '8px',
                          fontSize: '1rem'
                        }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '2px solid rgba(117, 218, 180, 0.3)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#75dab4'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(117, 218, 180, 0.3)'}
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email */}
                      <div className="col-md-6" style={{ marginBottom: '25px' }}>
                        <label style={{ 
                          display: 'block', 
                          color: '#75dab4', 
                          fontWeight: '600',
                          marginBottom: '8px',
                          fontSize: '1rem'
                        }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '2px solid rgba(117, 218, 180, 0.3)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#75dab4'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(117, 218, 180, 0.3)'}
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-md-6" style={{ marginBottom: '25px' }}>
                        <label style={{ 
                          display: 'block', 
                          color: '#75dab4', 
                          fontWeight: '600',
                          marginBottom: '8px',
                          fontSize: '1rem'
                        }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '2px solid rgba(117, 218, 180, 0.3)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#75dab4'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(117, 218, 180, 0.3)'}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Resume Upload */}
                      <div className="col-md-6" style={{ marginBottom: '25px' }}>
                        <label style={{ 
                          display: 'block', 
                          color: '#75dab4', 
                          fontWeight: '600',
                          marginBottom: '8px',
                          fontSize: '1rem'
                        }}>
                          Resume (PDF only, max 10MB) *
                        </label>
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf"
                          onChange={handleFileChange}
                          required
                          style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '2px solid rgba(117, 218, 180, 0.3)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none'
                          }}
                        />
                      </div>

                      {/* About Yourself */}
                      <div className="col-12" style={{ marginBottom: '25px' }}>
                        <label style={{ 
                          display: 'block', 
                          color: '#75dab4', 
                          fontWeight: '600',
                          marginBottom: '8px',
                          fontSize: '1rem'
                        }}>
                          Tell us about yourself *
                        </label>
                        <textarea
                          name="aboutYourself"
                          value={formData.aboutYourself}
                          onChange={handleInputChange}
                          required
                          rows="5"
                          style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '2px solid rgba(117, 218, 180, 0.3)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            resize: 'vertical',
                            minHeight: '120px'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#75dab4'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(117, 218, 180, 0.3)'}
                          placeholder="Tell us about your experience, skills, and what makes you a great fit for our team..."
                        />
                      </div>

                      {/* Links Section */}
                      <div className="col-12" style={{ marginBottom: '25px' }}>
                        <h3 style={{ 
                          color: '#75dab4', 
                          fontSize: '1.3rem', 
                          marginBottom: '20px',
                          fontWeight: '600' 
                        }}>
                          Portfolio & Links (Optional)
                        </h3>
                        
                        <div className="row">
                          {/* GitHub */}
                          <div className="col-md-6" style={{ marginBottom: '20px' }}>
                            <label style={{ 
                              display: 'block', 
                              color: '#ffffff', 
                              fontWeight: '500',
                              marginBottom: '8px',
                              fontSize: '0.95rem',
                              opacity: '0.9'
                            }}>
                              GitHub Profile
                            </label>
                            <input
                              type="url"
                              name="githubLink"
                              value={formData.githubLink}
                              onChange={handleInputChange}
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(117, 218, 180, 0.2)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                              }}
                              placeholder="https://github.com/yourusername"
                            />
                          </div>

                          {/* Portfolio */}
                          <div className="col-md-6" style={{ marginBottom: '20px' }}>
                            <label style={{ 
                              display: 'block', 
                              color: '#ffffff', 
                              fontWeight: '500',
                              marginBottom: '8px',
                              fontSize: '0.95rem',
                              opacity: '0.9'
                            }}>
                              Portfolio Website
                            </label>
                            <input
                              type="url"
                              name="portfolioLink"
                              value={formData.portfolioLink}
                              onChange={handleInputChange}
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(117, 218, 180, 0.2)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                              }}
                              placeholder="https://yourportfolio.com"
                            />
                          </div>

                          {/* LinkedIn */}
                          <div className="col-md-6" style={{ marginBottom: '20px' }}>
                            <label style={{ 
                              display: 'block', 
                              color: '#ffffff', 
                              fontWeight: '500',
                              marginBottom: '8px',
                              fontSize: '0.95rem',
                              opacity: '0.9'
                            }}>
                              LinkedIn Profile
                            </label>
                            <input
                              type="url"
                              name="linkedinLink"
                              value={formData.linkedinLink}
                              onChange={handleInputChange}
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(117, 218, 180, 0.2)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                              }}
                              placeholder="https://linkedin.com/in/yourprofile"
                            />
                          </div>

                          {/* Other Links */}
                          <div className="col-md-6" style={{ marginBottom: '20px' }}>
                            <label style={{ 
                              display: 'block', 
                              color: '#ffffff', 
                              fontWeight: '500',
                              marginBottom: '8px',
                              fontSize: '0.95rem',
                              opacity: '0.9'
                            }}>
                              Other Relevant Links
                            </label>
                            <input
                              type="text"
                              name="otherLinks"
                              value={formData.otherLinks}
                              onChange={handleInputChange}
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(117, 218, 180, 0.2)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                              }}
                              placeholder="Behance, Dribbble, personal blog, etc."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12" style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            background: isSubmitting ? 'rgba(117, 218, 180, 0.5)' : 'linear-gradient(135deg, #75dab4, #5bc49f)',
                            color: '#ffffff',
                            border: 'none',
                            padding: '18px 50px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            boxShadow: '0 10px 30px rgba(117, 218, 180, 0.3)',
                            transform: isSubmitting ? 'none' : 'translateY(0)',
                          }}
                          onMouseEnter={(e) => {
                            if (!isSubmitting) {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 15px 40px rgba(117, 218, 180, 0.4)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSubmitting) {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = '0 10px 30px rgba(117, 218, 180, 0.3)';
                            }
                          }}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                      </div>

                      {/* Status Message */}
                      {submitStatus && (
                        <div className="col-12" style={{ textAlign: 'center', marginTop: '20px' }}>
                          <p style={{
                            color: submitStatus.includes('success') ? '#75dab4' : '#ff6b6b',
                            fontSize: '1rem',
                            fontWeight: '500',
                            padding: '15px',
                            background: submitStatus.includes('success') 
                              ? 'rgba(117, 218, 180, 0.1)' 
                              : 'rgba(255, 107, 107, 0.1)',
                            borderRadius: '10px',
                            border: `1px solid ${submitStatus.includes('success') ? 'rgba(117, 218, 180, 0.3)' : 'rgba(255, 107, 107, 0.3)'}`
                          }}>
                            {submitStatus}
                          </p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Career;