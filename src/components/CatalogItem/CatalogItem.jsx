import { Link } from 'react-router-dom';
import './CatalogItem.scss';

function CatalogItem({ imageSrc, title, description, linkTo }) {
  return (
    <Link to={linkTo} className="catalog-item">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </Link>
  );
}

export default CatalogItem;
