import React, { useState } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import Split from "../components/Split";

const CareerHeader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images - you can replace these with your actual image paths
  const galleryImages = [
    { src: '/img/team/gallery1.webp', alt: 'Team collaboration', width: 4000, height: 3000 },
    { src: '/img/team/gallery2.webp', alt: 'Office workspace', width: 4000, height: 2252 },
    { src: '/img/team/gallery3.jpg', alt: 'Team meeting', width: 4032, height: 3024 },
    { src: '/img/team/gallery4.webp', alt: 'Creative session', width: 1070, height: 1472 },
    { src: '/img/team/gallery6.jpg', alt: 'Work environment', width: 3070, height: 3876 },
        { src: '/img/team/gallery5.jpg', alt: 'Team celebration', width: 720, height: 1280 },

  ];

  const companyPerks = [
    {
      title: "Healthcare Benefits",
      description: "Medical, dental, and vision insurance coverage for employees and sometimes their families."
    },
    {
      title: "Paid Time Off",
      description: "Including vacation days, holidays, sick leave, and sometimes personal days."
    },
    {
      title: "Flexible Work Schedules",
      description: "Options like remote work, flextime, or compressed workweeks to accommodate work-life balance."
    },
    {
      title: "Parental Leave",
      description: "Paid time off for new parents, including maternity, paternity, and adoption leave."
    },
    {
      title: "Company Events and Social Activities",
      description: "Team-building events, holiday parties, or outings to foster a sense of community."
    },
    {
      title: "Recognition and Rewards",
      description: "Programs to acknowledge outstanding performance or milestones with awards, bonuses, or certificates."
    }
  ];

  return (
    <div style={{ background: '#1a1a1a', color: '#ffffff', overflow: 'hidden',paddingTop:'20px'}} >
      {/* Hero Section with Main Team Image */}
      <section style={{ padding: '0px 0px 100px 0px', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="row align-items-center">
            <div className="col-lg-6" style={{ marginBottom: '40px' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',

                marginBottom: '30px',
                lineHeight: '1.2'
              }}>
                Join Our Elite Team
              </h1>
              <p style={{
                fontSize: '1.3rem',
                color: '#75dab4',
                fontWeight: '600',
                marginBottom: '25px',
                lineHeight: '1.6'
              }}>
                Our success is driven by our highly skilled in-house team, allowing us to provide top-tier service and expertise to our clients.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#ffffff',
                opacity: '0.9',
                marginBottom: '25px',
                lineHeight: '1.7'
              }}>
                <strong>100% of our team is in-house</strong>, ensuring quality control and consistency. Say goodbye to the risks and delays of outsourcing or freelancers.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#ffffff',
                opacity: '0.8',
                lineHeight: '1.7'
              }}>
                Expertly crafted for a seamless journey, our team delivers a top-notch experience from beginning to end. Our streamlined approach guarantees exceptional results every time.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(117, 218, 180, 0.2)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.3s ease'
              }}>
                <Image
                  src="/img/team/team.jpg" // Replace with your actual team image
                  alt="Our Amazing Team"
                  width={600}
                  height={400}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(117, 218, 180, 0.1), transparent)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
      <section style={{ padding: '80px 0', background: 'rgba(117, 218, 180, 0.05)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                      <div className="sec-head custom-font text-center">

            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Life At Thriftizer.
              </h3>
            </Split>
            <span className="tbg">Thriftizer</span>
          </div>
            <p style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              opacity: '0.8'
            }}>
              Get a glimpse into our vibrant work culture and dynamic team environment
            </p>
          </div>

          <div style={{
            columns: '3',
            columnGap: '20px',
            marginBottom: '40px'
          }}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  breakInside: 'avoid',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(117, 218, 180, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              >
                <span style={{
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {image.alt}
                </span>
              </div>
            </div>
            ))}
          </div>

          {/* Responsive styles for smaller screens */}
          <style jsx>{`
            @media (max-width: 768px) {
              div[style*="columns: '3'"] {
                columns: 2 !important;
              }
            }
            @media (max-width: 480px) {
              div[style*="columns: '3'"] {
                columns: 1 !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Video Section */}
      {/* <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#75dab4',
              marginBottom: '20px'
            }}>
              Meet Our Team
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              opacity: '0.8'
            }}>
              Watch our team members share their experiences and insights
            </p>
          </div>
          
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(117, 218, 180, 0.2)',
            background: '#000'
          }}>
            <video
              controls
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
              poster="/img/team/video-poster.jpg" // Replace with your video poster
            >
              <source src="/img/team/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section> */}

      {/* Become a Thriftizer Section */}
      <section style={{ 
        padding: '100px 0', 
        background: 'linear-gradient(135deg, rgba(117, 218, 180, 0.1), rgba(255, 255, 255, 0.05))',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '30px',
              color:'rgb(117, 218, 180)',
            }}>
              Become a Thriftizer Solutions
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#ffffff',
              lineHeight: '1.8',
              marginBottom: '30px',
              maxWidth: '800px',
              margin: '0 auto 30px'
            }}>
              We are not just another agency, but a dedicated group of individuals who are passionate about ecommerce and determined to drive success for Career. Join us on this journey towards e-commerce excellence.
            </p>
            <p style={{
              fontSize: '1.5rem',
              color: '#75dab4',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Join us to build something extraordinary
            </p>
          </div>
        </div>
      </section>

      {/* Company Perks Section */}
      <section style={{ padding: '100px 0px 0px 0px', background: 'rgba(0, 0, 0, 0.3)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
<div className="sec-head custom-font text-center">

            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Company Perks.
              </h3>
            </Split>
            <span className="tbg">Perks.</span>
          </div>
            <p style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              opacity: '0.8'
            }}>
              We believe in taking care of our team with comprehensive benefits and perks
            </p>
          </div>

          <div className="row">
            {companyPerks.map((perk, index) => (
              <div key={index} className="col-lg-6" style={{ marginBottom: '40px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(117, 218, 180, 0.1), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(117, 218, 180, 0.2)',
                  borderRadius: '15px',
                  padding: '30px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(117, 218, 180, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #75dab4, #5bc49f)',
                      color: '#ffffff',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      marginRight: '15px'
                    }}>
                      {index + 1}
                    </span>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#75dab4',
                      margin: 0
                    }}>
                      {perk.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    color: '#ffffff',
                    opacity: '0.9',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerHeader;