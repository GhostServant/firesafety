import './ProductCard.scss';
import { Link } from "react-router-dom";
function ProductCard({ image, title, link }) {
  return (
    <Link to={link}>
      <div className="product-card">
        <div className="image-container">
          <img src={image} alt={title} />
          <div className="title-overlay">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;