import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Card from "../components/Card";
import NotFound from "../components/Pagenot";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProductDetail from "../components/ProductDetail";
import Productpage from "../components/Productpage";
import Contact from "../components/Contact";
function Routing() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Routing
