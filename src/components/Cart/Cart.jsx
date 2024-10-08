import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { cartState } from './../../recoil/atoms';
import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { API_BASE_URL, PAYMENT_ENDPOINT } from '../../constants/apiConstants';
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  
  const location = useLocation();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  
    // Восстановление email из локального хранилища
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
      setIsEmailValid(validateEmail(savedEmail));
    }
  
    const paymentId = localStorage.getItem('paymentId');
    if (paymentId) {
      checkOrderStatus();
    }
  }, [setCart]);
  


  const totalPrice = cart.reduce((sum, item) => {
    const price = item.retailPrice || 0;
    const applicablePrice = item.quantity * price >= 50000 ? (item.wholesalePrice || price) : price;
    return sum + applicablePrice * item.quantity;
  }, 0);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    localStorage.removeItem('orderUuid');
    localStorage.removeItem('email'); // Очистка email
  };
  

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  
    // Сохранение email в локальном хранилище
    localStorage.setItem('email', newEmail);
  };
  

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const checkOrderStatus = async () => {
    const paymentId = localStorage.getItem('paymentId');
    const savedEmail = localStorage.getItem('email'); // Получаем сохраненный email
  
    if (!paymentId) {
      setError('ID платежа не найден.');
      return;
    }
  
    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`${API_BASE_URL}${PAYMENT_ENDPOINT}/${paymentId}`);
      
      setOrderStatus(response.data.status);
  
      if (response.data.status === 'succeeded') {
        await sendOrderConfirmation(savedEmail, cart); // Используем сохраненный email
        clearCart();
      }
    } catch (error) {
      console.error('Ошибка при проверке статуса заказа:', error);
      setError('Произошла ошибка при проверке статуса заказа');
    } finally {
      setIsLoading(false);
    }
  };
  


const sendOrderConfirmation = async (email, cartItems) => {
  const emailData = {
      recipient_email: email,
      subject: 'Подтверждение заказа',
      items: cartItems.map(item => ({
          name: item.name,
          cost: item.retailPrice || item.wholesalePrice || 0,
          count: item.quantity
      }))
  };
  try {
      const resp = await axios.post(`${API_BASE_URL}/mailing/send-email/`, emailData);
      console.log(resp);
      
  } catch (error) {
      console.error('Ошибка при отправке подтверждения заказа:', error);
  } finally{
    localStorage.removeItem('paymentId');
  }
};


  const createPayment = async () => {
    if (!isEmailValid || !email) {
        setError('Пожалуйста, введите корректный email');
        return;
    }

    setIsLoading(true);
    setError('');

    try {
        // Генерируем UUID для платежа
        let orderUuid = uuidv4();


        // Сохраняем UUID в локальное хранилище для дальнейшей проверки статуса
        localStorage.setItem('orderUuid', orderUuid);
        
        // Создаем запрос на создание платежа с передачей UUID
        const response = await axios.post(`${API_BASE_URL}${PAYMENT_ENDPOINT}/${orderUuid}`, {
            amount: {
                currency: 'RUB',
                value: totalPrice.toFixed(2),
            },
            description: `Оплата заказа ${orderUuid}`,
        });

        // Сохраняем ID платежа из ответа, чтобы использовать его для проверки статуса платежа
        const paymentId = response.data.id;
        localStorage.setItem('paymentId', paymentId);

        // Перенаправляем на страницу подтверждения платежа, используя ссылку из ответа
        window.location.href = response.data.confirmation.confirmation_url;
    } catch (error) {
        console.error('Ошибка при создании платежа:', error);
        setError('Произошла ошибка при создании платежа');
    } finally {
        setIsLoading(false);
    }
};


  if (orderStatus === 'successful') {
    return (
      <div className={styles.cart}>
        <h2>Заказ успешно оплачен</h2>
        <p>Спасибо за ваш заказ! Подтверждение отправлено на ваш email.</p>
        <Link to="/catalog" className={styles.continueShopping}>Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <div className={styles.emptyCartIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="80" height="80">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
          <p>Ваша корзина пуста</p>
          <Link to="/catalog" className={styles.continueShopping}>Нажмите здесь, чтобы продолжить покупки</Link>
        </div>
      ) : (
        <>
          <div className={styles.cartActions}>
            <button className={styles.clearCartButton} onClick={clearCart}>Очистить корзину</button>
          </div>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <CartItem 
                key={item.uniqueKey} 
                item={item} 
              />
            ))}
          </div>
          <div className={styles.cartSummary}>
            <span>Итого:</span>
            <span>{totalPrice.toFixed(2)} руб.</span>
          </div>
          <div className={styles.emailInput}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Введите email для чека"
              className={!isEmailValid ? styles.invalidEmail : ''}
            />
            {!isEmailValid && <span className={styles.errorMessage}>Некорректный email</span>}
          </div>
          <button 
            className={styles.checkoutButton} 
            onClick={createPayment}
            disabled={isLoading || !isEmailValid || !email}
          >
            {isLoading ? 'Загрузка...' : 'Перейти к оплате'}
          </button>
          {error && <div className={styles.errorMessage}>{error}</div>}
        </>
      )}
    </div>
  );
};

export default Cart;
