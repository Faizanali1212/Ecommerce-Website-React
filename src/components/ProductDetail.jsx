import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/server';
import '../style/Style.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProduct = products.find((product) => product.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) {
    return (
      <div className="not-found">
        <div className="container">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/products')} className="back-btn">
            ← Back to Products
          </button>
        </div>
      </div>
    );
  }
  const images = [
    selectedProduct.image,
    selectedProduct.image.replace('w=400', 'w=500'), // Thumbnail variations
    selectedProduct.image.replace('w=400', 'w=600')
  ];

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <a href="/products">Products</a> / <span>{selectedProduct.name}</span>
        </div>
      </nav>

      {/* Main Product Section */}
      <section className="product-main">
        <div className="container">
          <div className="product-main-content">
            {/* Product Images */}
            <div className="product-images">
              <div className="image-thumbnails">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedProduct.name} ${index + 1}`}
                    className={selectedImage === index ? 'thumbnail active' : 'thumbnail'}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
              <div className="main-image">
                <img src={images[selectedImage]} alt={selectedProduct.name} />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="product-header">
                <h1 className="product-title">{selectedProduct.name}</h1>
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">4.8 (1,247 reviews)</span>
                </div>
              </div>

              <div className="product-price-section">
                <div className="price-container">
                  <span className="current-price">₹{selectedProduct.price.toFixed(0)}</span>
                  <span className="original-price">₹{(selectedProduct.price * 1.25).toFixed(0)}</span>
                  <span className="discount">{selectedProduct.discount || '-20%'}</span>
                </div>
              </div>

              <div className="product-details">
                <p className="product-description">{selectedProduct.description}</p>
                
                <div className="product-specs">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>✅ Premium Quality Material</li>
                    <li>✅ 1 Year Warranty</li>
                    <li>✅ Free Shipping Above ₹999</li>
                    <li>✅ 30 Days Return Policy</li>
                  </ul>
                </div>

                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                      className="qty-input"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="product-actions">
                  <button className="add-to-cart-btn">
                    Add to Cart - ₹{ (selectedProduct.price * quantity).toFixed(0) }
                  </button>
                  <button className="buy-now-btn">Buy Now</button>
                </div>

                <div className="product-guarantee">
                  <span className="guarantee-icon">🛡️</span>
                  <span>Secure Checkout | 100% Genuine Product | Free Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
