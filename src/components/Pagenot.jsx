import { Link } from "react-router-dom";
import "../style/Style.css";

function Pagenot() {
  return (
    <section className="not-found-page">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">Page Not Found</h1>
      <p className="not-found-text">The page you are looking for does not exist.</p>
      <Link className="not-found-btn" to="/">
        Back to Home
      </Link>
    </section>
  )
}

export default Pagenot
