import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Services2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    {
      title: "Digital Marketing",
      subtitle: "Performance Driven",
      description: "Our digital marketing services are designed to scale your brand profitably across multiple channels. From Meta and Google Ads to performance marketing strategies, we focus on optimizing every customer touchpoint. We analyze your audience behavior, create engaging ad creatives, set up retargeting funnels, and monitor performance with real-time analytics to ensure high ROI and sustainable growth."
    },
    {
      title: "Social Media Management", 
      subtitle: "Community Building",
      description: "We manage your social media presence end-to-end, including content strategy, creative design, copywriting, and daily engagement. Whether it's Instagram Reels, LinkedIn posts, or Facebook ad creatives, we tailor content to your audience and platform. Our team tracks insights, analyzes trends, and executes growth-focused campaigns to build strong communities and boost brand recall."
    },
    {
      title: "SEO & Content Marketing",
      subtitle: "Organic Growth", 
      description: "We help your brand rank higher and get discovered with our comprehensive SEO and content marketing services. From in-depth keyword research and on-page optimization to high-quality blog writing and backlink building, we focus on driving organic traffic that converts. Our strategies are data-driven and aligned with your business goals to build long-term visibility and authority."
    },
    {
      title: "Brand Strategy & Design",
      subtitle: "Visual Identity",
      description: "Your brand's identity is more than just a logo. We help you define and refine your visual language, tone of voice, and customer perception. Our branding team works closely with you to develop brand guidelines, moodboards, typography, and strategic design assets that consistently represent your values across digital and print platforms."
    },
    {
      title: "Influencer & Affiliate Marketing",
      subtitle: "Partnership Growth",
      description: "We create impactful influencer and affiliate campaigns that tap into niche communities and authentic audiences. By identifying the right creators and partners for your brand, we handle outreach, negotiation, campaign strategy, and performance tracking. Whether it's nano influencers or macro partnerships, we ensure every collaboration is ROI-focused and brand-aligned."
    },
    {
      title: "Email Marketing & Automation",
      subtitle: "Customer Retention",
      description: "Our email marketing services combine thoughtful strategy with powerful automation tools. From welcome flows and product launch emails to re-engagement and cart recovery sequences, we create campaigns that drive revenue and improve customer retention. With advanced segmentation and A/B testing, we ensure your emails land at the right time, to the right people, with the right message."
    }
  ];

  const openModal = (index) => {
    setCurrentServiceIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentServiceIndex];

  return (
    <>
      <section className="services section-padding">
        <div className="container">
<div className="row rone">
  <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
    <div className="mas-item" onClick={() => openModal(0)} style={{cursor: 'pointer'}}>
      <span className="icon fas fa-desktop"></span>
      <h6>
        Digital  <br /> Marketing
      </h6>
      <div className="text-right">
        <a 
          className="more" 
          href="/contact"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="bg-color"></div>
    </div>
  </div>
  <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
    <div className="mas-item" onClick={() => openModal(1)} style={{cursor: 'pointer'}}>
      <span className="icon fas fa-camera"></span>
      <h6>
        Social Media  <br /> Management
      </h6>
      <div className="text-right">
        <a 
          className="more" 
          href="/contact"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="bg-color"></div>
    </div>
  </div>
  <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
    <div className="mas-item" onClick={() => openModal(2)} style={{cursor: 'pointer'}}>
      <span className="icon fas fa-mobile-alt"></span>
      <h6>
        SEO & Content  <br /> Marketing
      </h6>
      <div className="text-right">
        <a 
          className="more" 
          href="/contact"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="bg-color"></div>
    </div>
  </div>
</div>
<div className="row rtwo">
  <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
    <div className="mas-item" onClick={() => openModal(3)} style={{cursor: 'pointer'}}>
      <span className="icon fas fa-palette"></span>
      <h6>
        Brand Strategy <br /> & Design 
      </h6>
      <div className="text-right">
        <a 
          className="more" 
          href="/contact"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="bg-color"></div>
    </div>
  </div>
  <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
    <div className="mas-item" onClick={() => openModal(4)} style={{cursor: 'pointer'}}>
      <span className="icon fas fa-bullhorn"></span>
      <h6>
        Influencer &  <br /> Affiliate Marketing
      </h6>
      <div className="text-right">
        <a 
          className="more" 
          href="/contact"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="bg-color"></div>
    </div>
  </div>
  <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
    <div className="mas-item" onClick={() => openModal(5)} style={{cursor: 'pointer'}}>
      <span className="icon fas fa-envelope-open-text"></span>
      <h6>
        Email Marketing  <br /> & Automation
      </h6>
      <div className="text-right">
        <a 
          className="more" 
          href="/contact"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="bg-color"></div> 
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#11141b',
              borderRadius: '16px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '80vh',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(117, 218, 180, 0.2)',
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(117, 218, 180, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div style={{ padding: '40px 40px 30px 40px', overflowY: 'auto', maxHeight: '80vh' }}>
              {/* Title */}
              <h2 
                style={{ 
                  color: '#75dab4',
                  fontSize: '28px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  lineHeight: '1.2'
                }}
              >
                {currentService.title}
              </h2>
              <p 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '16px',
                  marginBottom: '32px',
                  fontWeight: '500'
                }}
              >
                {currentService.subtitle}
              </p>

              {/* Description */}
              <div style={{ marginBottom: '40px' }}>
                <p 
                  style={{ 
                    color: 'white',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    textAlign: 'justify'
                  }}
                >
                  {currentService.description}
                </p>
              </div>

              {/* Navigation */}
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                {/* Dots Navigation */}
                <div style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentServiceIndex(index)}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: index === currentServiceIndex ? '#75dab4' : 'rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        transform: index === currentServiceIndex ? 'scale(1.2)' : 'scale(1)'
                      }}
                    />
                  ))}
                </div>

                {/* Previous/Next Buttons */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <button
                    onClick={prevService}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      fontWeight: '500',
                      flex: '1',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(117, 218, 180, 0.1)';
                      e.target.style.borderColor = '#75dab4';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={nextService}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      backgroundColor: '#75dab4',
                      color: '#11141b',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      fontWeight: '600',
                      flex: '1',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#5bc49a';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#75dab4';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services2;