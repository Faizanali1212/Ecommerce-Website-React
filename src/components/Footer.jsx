import '../style/Style.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Shopify Pro</h2>
            <p className="footer-description">
              Your trusted online shopping destination. 
              Premium quality products at best prices.
            </p>
            <div className="social-links">
              <a href="#!" className="social-link">📘</a>
              <a href="#!" className="social-link">📷</a>
              <a href="#!" className="social-link">🐦</a>
              <a href="#!" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Products</a></li>
              <li><a href="#!">Categories</a></li>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Customer Service</h3>
            <ul className="footer-links">
              <li><a href="#!">Order Tracking</a></li>
              <li><a href="#!">Returns</a></li>
              <li><a href="#!">Shipping Info</a></li>
              <li><a href="#!">FAQ</a></li>
              <li><a href="#!">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>support@shopifypro.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 Shopify Pro. All rights reserved.</p>
          </div>
          <div className="footer-policies">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
            <a href="#!">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
