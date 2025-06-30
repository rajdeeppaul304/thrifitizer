// import StylesServices from './styles.jsx';

const ThreeSixtyDegree = () => {
  return (

    <div className="performance-marketing-page">
      <style jsx>{`
          .performance-marketing-page {
            min-height: 100vh;
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .hero-section {
            padding: 100px 0 80px;
            background-size: cover;
            background-position: center;
            position: relative;
            overflow: hidden;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
background: radial-gradient(circle at 20% 20%, rgba(117, 218, 180, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(66, 190, 150, 0.12) 0%, transparent 50%);
            pointer-events: none;
          }

          .hero-content {
            position: relative;
            z-index: 2;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            background: white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            line-height: 1.5;
            color:white;
          }

          .hero-subtitle {
            font-size: 1.3rem;
            color: #b0b8c4;
            margin-bottom: 2rem;
            font-weight: 300;
            line-height: 1.6;
          }

          .section-content {
            padding: 20px 0;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
          }



          .service-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 2.5rem;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(117, 218, 180, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .service-card:hover::before {
            opacity: 1;
          }

          .service-card:hover {
            transform: translateY(-10px);
            border-color: rgba(117, 218, 180, 0.3);
            box-shadow: 0 20px 40px rgba(117, 218, 180, 0.2);
          }

          .service-card-content {
            position: relative;
            z-index: 2;
          }

          .service-icon {
            font-size: 3rem;
            background: linear-gradient(135deg, #75dab4 0%, #4caf50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
          }

          .service-card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 1rem;
          }

          .service-card p {
            color: #b0b8c4;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .service-list {
            list-style: none;
            padding: 0;
          }

          .service-list li {
            color: #d1d5db;
            margin-bottom: 0.8rem;
            padding-left: 1.5rem;
            position: relative;
          }

          .service-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #75dab4;
            font-weight: bold;
          }

          .stats-section {
            background: linear-gradient(135deg, rgba(117, 218, 180, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%);
            padding: 60px 0;
            margin: 60px 0;
            border-radius: 20px;
          }

          .stat-item {
            text-align: center;
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #75dab4 0%, #4caf50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            color: #b0b8c4;
            font-size: 1.1rem;
            font-weight: 500;
          }

          .cta-section {
            background: linear-gradient(135deg, #75dab4 0%, #42caa1 100%);
            padding: 60px 0;
            border-radius: 20px;
            text-align: center;
            margin-top: 60px;
        margin-left:100px;
         margin-right:100px;
            margin-bottom: 100px; 

          }

          .cta-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 1rem;
          }

          .cta-subtitle {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.9);
            margin-bottom: 2rem;
          }

          .cta-button {
            background: rgba(255,255,255,0.2);
            border: 2px solid rgba(255,255,255,0.3);
            color: #ffffff;
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }

          .cta-button:hover {
            background: rgba(255,255,255,0.3);
            border-color: rgba(255,255,255,0.5);
            color: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          .platform-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .platform-item {
            background: rgba(255,255,255,0.05);
            padding: 1.5rem;
            border-radius: 15px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
          }

          .platform-item:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-5px);
          }

          .platform-item i {
            font-size: 2.5rem;
            color: #667eea;
            margin-bottom: 1rem;
          }

          .platform-item h4 {
            color: #ffffff;
            font-size: 1.1rem;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .section-title {
              font-size: 2rem;
            }
            
            .service-card {
              padding: 2rem;
            }
            
            .cta-title {
              font-size: 2rem;
            }
              
          .cta-section {

        margin:10px;
            margin-bottom: 100px; 

          }
          }
        `}</style>

      {/* Hero Section */}
    <section
      className="hero-section"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/Video/services_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="hero-content text-white">
              <h1 className="hero-title">SEO & Content Marketing</h1>
              <p className="hero-subtitle">
            We champion organic growth by optimizing Shopify stores for SEO, ensuring both search engines and users find, enjoy, and convert on your content.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>





{/* Overview Section */}
<section className="section-content">
  <div className="container">
    <h2 className="section-title">Overview</h2>
    <div className="row">
      <div className="col-lg-12">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Organic Growth That Lasts</h3>
            <p>
              We champion organic growth by optimizing Shopify stores for SEO, ensuring both search engines and users find, enjoy, and convert on your content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* What We Do Section */}
<section className="section-content">
  <div className="container">
    <h2 className="section-title">What We Do</h2>
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Technical SEO Audits</h3>
            <p>Conduct in-depth technical audits covering site speed, schema markup, and canonical tags.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Content Strategy</h3>
            <p>Develop keyword-rich, conversion-optimized content like blogs, product guides, and pillar pages.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-link"></i>
            </div>
            <h3>Link Building</h3>
            <p>Execute backlink strategies, on-site content hubs, and internal linking for better authority and UX.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Analytics & Reporting</h3>
            <p>Monitor performance via GA4, Search Console, and deliver actionable quarterly reports.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why It Works Section */}
<section className="section-content">
  <div className="container">
    <h2 className="section-title">Why It Works</h2>
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Aligned With Shopify UX</h3>
            <p>
              By aligning SEO and content with your Shopify UX, we boost your long-term authority, cut acquisition costs, and deliver sustainable traffic growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Who It's For Section */}
<section className="section-content">
  <div className="container">
    <h2 className="section-title">Who It's For</h2>
    <div className="row d-flex align-items-stretch">
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-store"></i>
            </div>
            <h3>New Shopify Launches</h3>
            <p>Brands launching new collections or storefronts looking to rank quickly and effectively.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>Low Organic Traffic</h3>
            <p>Ecommerce businesses struggling to attract qualified search traffic.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>High-Intent SEO Targeting</h3>
            <p>Shopify pages aiming to rank for transactional, high-intent keyword searches.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="cta-section">
  <div className="container">
    <h2 className="cta-title">Next Steps</h2>
    <p className="cta-subtitle">Receive a comprehensive SEO health score and custom content roadmap — on us.</p>
                    <div className="custom-made">
                <a href="/contact" className="btn-curve btn-lit custom-button">
                  <span className="text-color-black">
                   Get Your Free Audit
                  </span>
                </a>
              </div>
  </div>
</section>




      </div>
   )
   }

export default ThreeSixtyDegree;