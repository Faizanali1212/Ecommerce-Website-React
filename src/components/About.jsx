import '../style/Style.css';
import { ThemeContext } from './ThemContext';
import { useContext } from 'react';

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`about-page ${theme === 'dark' ? 'about-dark' : ''}`}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Shopify Pro</h1>
            <p className="hero-subtitle">
              Trusted by 50K+ customers across India. 
              Premium quality products at unbeatable prices since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Products Sold</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-description">
                Founded in 2020, Shopify Pro started with a simple mission - 
                to make premium quality products accessible to everyone at 
                affordable prices. Today, we serve 50,000+ customers across 
                India with 100+ product categories.
              </p>
              <p className="story-description">
                We partner with top manufacturers and brands to ensure 
                you get the best quality without compromising on price. 
                Our commitment to customer satisfaction has earned us 
                4.9★ rating from verified buyers.
              </p>
              <div className="story-features">
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>100% Genuine Products</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>Fast Delivery</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600" 
                alt="Our Team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Shopify Pro?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Secure Shopping</h3>
              <p>SSL encrypted. 100% safe transactions</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Delivered within 2-5 days across India</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Direct from manufacturers. No middlemen</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⭐</div>
              <h3>Trusted Quality</h3>
              <p>50K+ verified reviews. 4.9★ rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" alt="CEO" />
              </div>
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" alt="CTO" />
              </div>
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" alt="CMO" />
              </div>
              <h3>Mike Johnson</h3>
              <p>CMO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;