import { useRecoilState } from 'recoil';
import { cartState } from './../../../recoil/atoms';
import styles from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const [cart, setCart] = useRecoilState(cartState);

  // Функция для изменения количества через input
  const handleQuantityInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.uniqueKey === item.uniqueKey ? { ...cartItem, quantity: newQuantity } : cartItem
        )
      );
    }
  };

  // Функция для изменения количества при нажатии на + или -
  const handleQuantityButtonClick = (newQuantity) => {
    if (newQuantity > 0) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.uniqueKey === item.uniqueKey ? { ...cartItem, quantity: newQuantity } : cartItem
        )
      );
    }
  };

  const handleRemoveItem = () => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.uniqueKey !== item.uniqueKey));
  };

  // Выбор цены в зависимости от количества товара
  const price = (item.retailPrice || 0);
  const applicablePrice = item.quantity * price >= 50000 ? (item.wholesalePrice || price) : price;

  return (
    <div className={styles.cartItem}>
      <img src={item.productImage || 'https://www.magazin01.ru/upload/iblock/f32/qbz4ezesr4dh1pumjaztiv2zq5zir94b/Bezimeni_7.png'} alt={item.name} />
      <div className={styles.itemDetails}>
        <h3>{item.name}</h3>
        <p>{applicablePrice.toFixed(2)} руб./шт</p>
        <div className={styles.quantityControl}>
          <button onClick={() => handleQuantityButtonClick(item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
          <input
            type="number"
            value={item.quantity}
            onChange={handleQuantityInputChange}
            min="1"
          />
          <button onClick={() => handleQuantityButtonClick(item.quantity + 1)}>+</button>
        </div>
        <button className={styles.removeItemButton} onClick={handleRemoveItem}>×</button>
      </div>
      <div className={styles.itemTotal}>
        {(applicablePrice * item.quantity).toFixed(2)} руб.
      </div>
    </div>
  );
};

export default CartItem;
