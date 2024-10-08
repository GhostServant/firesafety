import { useState } from 'react';
import { Link } from 'react-router-dom';
import priceList from '../../data/priceList';
import styles from './ProductCatalog.module.scss';

const ProductCatalog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCatalog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.catalog}>
      <h3 onClick={toggleCatalog} className={styles.catalogHeader}>
        Каталог
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>&#9660;</span>
      </h3>
      {isOpen && (
        <ul className={styles.categoryList}>
          {priceList.map((category) => (
            <li key={category.id} className={styles.categoryItem}>
              <Link to={category.linkTo} className={styles.categoryCard}>
                <img src={category.imageSrc} alt={category.category} />
                <span>{category.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCatalog;
