// import StylesServices from './styles.jsx';

   const SocialMediaManagement = () => {
   return(
   <div className="performance-marketing-page">
        <style jsx>{`
          .performance-marketing-page {
            background: linear-gradient(135deg, #0d1117 0%, #161b26 50%, #1a1f2e 100%);
            min-height: 100vh;
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .hero-section {
            padding: 100px 0 80px;
            background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%23764ba2;stop-opacity:0.1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad1)"/></svg>');
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
            background: linear-gradient(135deg, #75dab4 0%, #4caf50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            line-height: 1.5;
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

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #75dab4, #4caf50);
            border-radius: 2px;
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
<section className="hero-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="hero-content text-center">
          <h1 className="hero-title">Social Media Growth</h1>
          <p className="hero-subtitle">
            Thriftizer transforms your social presence into a powerful storytelling platform, aligned with Shopify brand experiences, boosting awareness and driving sales.
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
              <i className="fas fa-share-alt"></i>
            </div>
            <h3>Social Presence That Sells</h3>
            <p>
              Thriftizer transforms your social presence into a powerful storytelling platform, aligned with Shopify brand experiences, boosting awareness and driving sales.
            </p>
            <p>
              Every post, story, and campaign is crafted to build relationships with your audience while supporting sales objectives and brand milestones.
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
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Strategic Content Calendars</h3>
            <p>Develop cohesive content calendars tailored to your target audience and product release cycles.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-photo-video"></i>
            </div>
            <h3>Native Content Production</h3>
            <p>Produce native static posts, Reels, Stories, and carousels—optimized for Instagram, Facebook, and TikTok.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Follower Growth</h3>
            <p>Grow followers organically and via boosted ads tied to product goals.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Community & Engagement</h3>
            <p>Monitor engagement, manage replies, source UGC, and collaborate with influencers.</p>
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
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Integrated Brand Communication</h3>
            <p>
              Our social strategy integrates seamlessly with Shopify store events, like new launches or promos, ensuring your posts drive direct traffic and conversions.
            </p>
            <p>
              No more disconnected content—everything you post works together to fuel the funnel and close the loop on ROI.
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
              <i className="fas fa-heart"></i>
            </div>
            <h3>Authentic Social Growth</h3>
            <p>Shopify brands seeking genuine social engagement and community building.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <h3>Followers to Customers</h3>
            <p>Businesses wanting to turn social engagement into measurable customer acquisition.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-plug"></i>
            </div>
            <h3>Integrated Shopify Stores</h3>
            <p>Ecommerce brands looking to integrate social media strategy with store operations and launches.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* CTA Section */}
<section className="cta-section " >
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-8">
    <h2 className="cta-title">Ready to Transform Your Marketing?</h2>
    <p className="cta-subtitle">
        Request a free performance audit today and discover how we can multiply your ROI through cross-channel optimization.
    </p>
    <a href="/contact" className="cta-button">
        Get Your Free Audit
    </a>
    </div>
</div>
</div>
</section>
      </div>
   )
   }

export default SocialMediaManagement;