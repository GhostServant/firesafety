import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { cartState } from './../../../recoil/atoms';
import styles from './ItemCard.module.scss';
import Modal from './../../Modal/Modal';
import ProductDetails from './../../ProductDetails/ProductDetails';

const ItemCard = ({ product }) => {
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const setCart = useSetRecoilState(cartState);

  const handleAddToCart = () => {
    setCart((currentCart) => {
      const uniqueKey = `${product.category}_${product.id}`;
      const existingItem = currentCart.find(item => item.uniqueKey === uniqueKey);

      if (existingItem) {
        return currentCart.map(item =>
          item.uniqueKey === uniqueKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1, uniqueKey }];
      }
    });

    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 4000); // Скрыть уведомление через 2 секунды
  };

  return (
    <div className={styles.card}>
      <img src={product.productImage} alt={product.name} className={styles.image} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p className={styles.availability}>
        <span className={styles.inStock}>Есть в наличии</span>
      </p>
      <p className={styles.price}>
        <span className={styles.retailPrice}>{product.retailPrice || '(Под заказ)'} руб./шт</span>
        {product.wholesalePrice && (
          <span className={styles.wholesalePrice}>{product.wholesalePrice} руб./шт (опт)</span>
        )}
      </p>

      <div className={styles.buttonContainer}>
        <button
          onClick={handleAddToCart}
          className={`${styles.orderButton} ${isAddedToCart ? styles.addedToCart : ''}`}
        >
          {isAddedToCart ? 'Добавлено в корзину' : 'В корзину'}
        </button>
      </div>

      {isAddedToCart && <div className={styles.notification}>Товар добавлен в корзину!</div>}

      <Modal isOpen={isDetailsModalOpen} onClose={() => setDetailsModalOpen(false)}>
        <ProductDetails product={product} />
      </Modal>
    </div>
  );
};

export default ItemCard;
