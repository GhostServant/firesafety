import React from 'react';
import { Link } from "react-router-dom";
import priceList from '../../data/priceList';
import styles from './Products.module.scss';

const ProductsCard = ({ category, imageSrc, items, link }) => (
  <Link to={link} className={styles.productCard}>
    <img className={styles.productImage} src={imageSrc} alt={category} />
    <h3 className={styles.productName}>{category}</h3>
    <p className={styles.productCount}>{items.length} товаров</p>
  </Link>
);

const Products = () => (
  <div className={styles.listingContainer}>
    <h1 className={styles.listingTitle}>Каталог продукции</h1>
    <div className={styles.productGrid}>
      {priceList.map((product) => (
        <ProductsCard
          key={product.id}
          category={product.category}
          imageSrc={product.imageSrc}
          items={product.items}
          link={product.linkTo}
        />
      ))}
    </div>
  </div>
);

export default Products;