import products from "../data/server";
import { Link } from "react-router-dom";
import '../style/Style.css';

function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Featured Products</h1>
          <p className="section-subtitle">Best selling products this week</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                <div className="product-badges">
                  <span className="badge-discount">{product.discount || '-20%'}</span>
                  {product.hot && <span className="badge-hot">HOT</span>}
                </div>
                <Link to={`/card/${product.id}`} className="quick-view-btn">Quick View</Link>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">
                {product.name}
                </h3>
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">(4.8)</span>
                </div>
                <div className="product-price">
                  <span className="current-price">PKR {product.price.toFixed(0)}</span>
                  <span className="original-price">PKR {(product.price * 1.25).toFixed(0)}</span>
                </div>
                <p className="product-description">{product.description}</p>
                
                <div className="product-actions">
                  <button className="add-to-cart-btn">
                    Add to Cart
                  </button>
                  <button className="wishlist-btn">♥</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
