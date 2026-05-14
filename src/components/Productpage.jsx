import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../data/server";
import '../style/Product.filtering.css';
import { ThemeContext } from './ThemContext';
import { useContext } from 'react';

function ProductsListing() {
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = [...data];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const categories = ['all', 'electronics', 'clothing', 'accessories', 'home'];

  return (
    <div className={`products-listing ${theme === 'dark' ? 'products-listing-dark' : ''}`}>
      {/* Hero Banner */}
      <section className="products-hero">
        <div className="container">
          <h1 className="products-hero-title">All Products ({filteredProducts.length})</h1>
          <p className="products-hero-subtitle">Discover premium quality products at best prices</p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-container">
            {/* Search */}
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filters */}
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="sort-wrapper">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="best-selling">Best Selling</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="product-card-link"
                >
                  <div className="product-card">
                    <div className="product-image-container">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image"
                      />
                      <div className="product-card-badges">
                        {product.hot && <span className="product-badge-hot">HOT</span>}
                        <span className="product-badge-discount">{product.discount || '-20%'}</span>
                      </div>
                    </div>
                    
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-rating">
                        <span className="stars">★★★★★</span>
                        <span>({product.rating || 4.8})</span>
                      </div>
                      <div className="product-price">
                        <span className="current-price">PKR {product.price.toFixed(0)}</span>
                        <span className="original-price">PKR {(product.price * 1.25).toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <div className="no-products-content">
                <h3>No products found</h3>
                <p>Try adjusting your search terms or filters</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="clear-filters-btn"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductsListing;