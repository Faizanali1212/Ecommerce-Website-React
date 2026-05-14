import '../style/Style.css';
import Crad from '../components/Card';
import { ThemeContext} from '../components/ThemContext';
import { useContext } from 'react';

function Home() {
      const { theme } = useContext(ThemeContext);
  return (
    <div className={`home-page ${theme === 'dark' ? 'home-dark' : ''}`}>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Up to 50% OFF - Limited Time</div>
            <h1 className="hero-title">
              Premium Products <br />
              Best Prices Guaranteed
            </h1>
            <p className="hero-subtitle">
              Discover 50,000+ high-quality products across 100+ categories. 
              Fast delivery across India with easy returns.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Products</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-outline">View Categories</button>
            </div>
          </div>

          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Premium Products" 
                 className="main-product-img" />
            <div className="product-badges">
              <span className="badge-hot">HOT</span>
              <span className="badge-discount">-30%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free delivery on orders above PKR 999</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Secure Payments</h3>
              <p>100% secure payment gateway</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30 days no questions asked</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Trusted</h3>
              <p>50K+ Happy Customers</p>
            </div>
          </div>
          <Crad />
        </div>
      </section>
    </div>
  );
}

export default Home;