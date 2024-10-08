import React from 'react';
import ItemCard from './ItemCard/ItemCard';
import styles from './ItemList.module.scss';

const ItemList = ({ products }) => {

  if (!products || products.length === 0) {
    return <div>Нет доступных продуктов</div>;
  }

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;