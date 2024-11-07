import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { cartState } from './../../recoil/atoms';
import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { API_BASE_URL, PAYMENT_ENDPOINT } from '../../constants/apiConstants';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal';

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [showModal, setShowModal] = useState(false); // Состояние для открытия/закрытия модалки

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handlePaymentConfirm = () => {
    createPayment(); // Выполнение платежа
    closeModal(); // Закрытие модалки
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Восстановление информации из локального хранилища
    const savedEmail = localStorage.getItem('email');
    const savedFirstName = localStorage.getItem('firstName');
    const savedLastName = localStorage.getItem('lastName');
    const savedPatronymic = localStorage.getItem('patronymic');
    const savedDeliveryAddress = localStorage.getItem('deliveryAddress');
    const savedPhone = localStorage.getItem('phone');
    if (savedEmail) {
      setEmail(savedEmail);
      setIsEmailValid(validateEmail(savedEmail));
    }
    if (savedFirstName) setFirstName(savedFirstName);
    if (savedLastName) setLastName(savedLastName);
    if (savedPatronymic) setPatronymic(savedPatronymic);
    if (savedDeliveryAddress) setDeliveryAddress(savedDeliveryAddress);
    if (savedPhone) {
      setPhone(savedPhone);
      setIsPhoneValid(validatePhone(savedPhone));
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
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('patronymic');
    localStorage.removeItem('deliveryAddress');
    localStorage.removeItem('phone');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
    localStorage.setItem('email', newEmail);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    localStorage.setItem('firstName', e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    localStorage.setItem('lastName', e.target.value);
  };

  const handlePatronymicChange = (e) => {
    setPatronymic(e.target.value);
    localStorage.setItem('patronymic', e.target.value);
  };

  const handleDeliveryAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
    localStorage.setItem('deliveryAddress', e.target.value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

  // Разрешаем только цифры и символ "+"
  const formattedValue = value.replace(/[^0-9+]/g, ''); 

  // Проверяем, что номер начинается с +7 или 8 и имеет правильную длину
  setPhone(formattedValue);
  setIsPhoneValid(validatePhone(formattedValue));
  localStorage.setItem('phone', formattedValue);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^(\+7|8)\d{10}$/;
    return re.test(phone);
  };

  const createPayment = async () => {
    if (!isEmailValid || !email || !firstName || !lastName || !deliveryAddress || !isPhoneValid || !phone) {
      setError('Пожалуйста, заполните все поля правильно');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      let orderUuid = uuidv4();
      localStorage.setItem('orderUuid', orderUuid);

      const response = await axios.post(`${API_BASE_URL}${PAYMENT_ENDPOINT}/${orderUuid}`, {
        amount: {
          currency: 'RUB',
          value: totalPrice.toFixed(2),
        },
        description: `Оплата заказа ${orderUuid}`,
      });

      const paymentId = response.data.id;
      localStorage.setItem('paymentId', paymentId);

      window.location.href = response.data.confirmation.confirmation_url;
    } catch (error) {
      console.error('Ошибка при создании платежа:', error);
      setError('Произошла ошибка при создании платежа');
    } finally {
      setIsLoading(false);
    }
  };

  const [emailSent, setEmailSent] = useState(false); // Флаг для отслеживания отправки письма

const checkOrderStatus = async () => {
  const paymentId = localStorage.getItem('paymentId');
  const savedEmail = localStorage.getItem('email');
  const savedFirstName = localStorage.getItem('firstName');
  const savedLastName = localStorage.getItem('lastName');
  const savedPatronymic = localStorage.getItem('patronymic');
  const savedDeliveryAddress = localStorage.getItem('deliveryAddress');
  const savedPhone = localStorage.getItem('phone');

  if (!paymentId) {
    setError('ID платежа не найден.');
    return;
  }

  setIsLoading(true);
  setError('');

  try {
    const response = await axios.get(`${API_BASE_URL}${PAYMENT_ENDPOINT}/${paymentId}`);
    setOrderStatus(response.data.status);

    if (response.data.status === 'succeeded' && !emailSent) { // Проверка флага emailSent
      setEmailSent(true); // Устанавливаем флаг, чтобы не отправить письмо повторно
      await sendOrderConfirmation(savedEmail, savedFirstName, savedLastName, savedPatronymic, savedDeliveryAddress, savedPhone, cart);
      clearCart();
    }
  } catch (error) {
    console.error('Ошибка при проверке статуса заказа:', error);
    setError('Произошла ошибка при проверке статуса заказа');
  } finally {
    setIsLoading(false);
  }
};
  
  const sendOrderConfirmation = async (email, firstname, surname, patronymic, deliveryAddress, phone, cartItems) => {
    const emailData = {
      recipient_email: email,
      subject: 'Подтверждение заказа',
      items: cartItems.map(item => ({
        name: item.name,
        cost: item.retailPrice || item.wholesalePrice || 0,
        count: item.quantity
      })),
      firstname,
      surname,
      patronymic,
      address: deliveryAddress,
      phone
    };
  
    try {
      // Отправка email только один раз
      const resp = await axios.post(`${API_BASE_URL}/mailing/send-email/`, emailData);
      console.log('Email отправлен:', resp);
    } catch (error) {
      console.error('Ошибка при отправке подтверждения заказа:', error);
    } finally {
      localStorage.removeItem('paymentId'); // Очистка paymentId после отправки письма
    }
  };
  

  if (orderStatus === 'succeeded') {
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
          <div className={styles.formFields}>
            <div className={styles.formField}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Введите email для чека"
                className={!isEmailValid ? styles.invalidField : ''}
              />
              {!isEmailValid && <span className={styles.errorMessage}>Некорректный email</span>}
            </div>
            <div className={styles.formField}>
              <label htmlFor="firstName">Имя:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="Введите имя"
                required
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="lastName">Фамилия:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Введите фамилию"
                required
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="patronymic">Отчество:</label>
              <input
                type="text"
                id="patronymic"
                value={patronymic}
                onChange={handlePatronymicChange}
                placeholder="Введите отчество"
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="deliveryAddress">Адрес доставки:</label>
              <select
                id="deliveryAddress"
                value={deliveryAddress}
                onChange={handleDeliveryAddressChange}
                required
              >
                <option value="">Выберите пункт доставки</option>
                <option value="Пункт выдачи Минеральные воды, ул. Новосёлов, 9А">Пункт выдачи Минеральные воды, ул. Новосёлов, 9А</option>
                <option value="Пункт выдачи Пятигорск, ул. Украинская, 34">Пункт выдачи Пятигорск, ул. Украинская, 34</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label htmlFor="phone">Номер телефона:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Введите номер телефона"
                className={!isPhoneValid ? styles.invalidField : ''}
                required
              />
              {!isPhoneValid && <span className={styles.errorMessage}>Номер телефона должен начинаться с +7 или 8 и содержать 10 цифр после кода</span>}
            </div>
          </div>
          <button 
            className={styles.checkoutButton} 
            onClick={openModal}
            disabled={isLoading || !isEmailValid || !email || !firstName || !lastName || !deliveryAddress || !isPhoneValid || !phone}
          >
            {isLoading ? 'Загрузка...' : 'Перейти к оплате'}
          </button>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <Modal 
        isOpen={showModal} 
        onClose={closeModal} // Передаем функцию для закрытия модалки
      >
        <h2>Пожалуйста, завершите оплату</h2>
        <p>Перед тем как продолжить, убедитесь, что:</p>
        <ul>
          <li>Вы вернулись на страницу корзины после оплаты.</li>
          <li>Проверьте наличие письма с чеком на указанный email.</li>
        </ul>
        <div className={styles.modal_actions}>
          <button className={styles.button_cart} onClick={handlePaymentConfirm}>Подтвердить оплату</button>
          <button className={styles.button_cart} onClick={closeModal}>Отмена</button>
        </div>
      </Modal>
        </>
      )}
    </div>
  );
};

export default Cart;