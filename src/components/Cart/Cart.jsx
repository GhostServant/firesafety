import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { cartState } from './../../recoil/atoms';
import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../constants/apiConstants';

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
  const [clientType, setClientType] = useState('physical');
  const [inn, setInn] = useState('');

  const handlePaymentConfirm = () => {
    createPayment();
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
    const savedClientType = localStorage.getItem('clientType');
    const savedInn = localStorage.getItem('inn');
    if (savedEmail) {
      setEmail(savedEmail);
      setIsEmailValid(validateEmail(savedEmail));
    }
    if (savedClientType) setClientType(savedClientType);
    if (savedInn) setInn(savedInn);
    if (savedFirstName) setFirstName(savedFirstName);
    if (savedLastName) setLastName(savedLastName);
    if (savedPatronymic) setPatronymic(savedPatronymic);
    if (savedDeliveryAddress) setDeliveryAddress(savedDeliveryAddress);
    if (savedPhone) {
      setPhone(savedPhone);
      setIsPhoneValid(validatePhone(savedPhone));
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
    localStorage.removeItem('inn');
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

  const handleInnChange = (e) => {
    setInn(e.target.value);
    localStorage.setItem('inn', e.target.value);
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

    const savedEmail = localStorage.getItem('email');
    const savedFirstName = localStorage.getItem('firstName');
    const savedLastName = localStorage.getItem('lastName');
    const savedPatronymic = localStorage.getItem('patronymic');
    const savedDeliveryAddress = localStorage.getItem('deliveryAddress');
    const savedPhone = localStorage.getItem('phone');
    const savedInn = localStorage.getItem('inn') ?? 'Физическое лицо';
    

    setIsLoading(true);
    setError('');

    try {
      await sendOrderConfirmation(savedEmail, savedFirstName, 
        savedLastName, savedPatronymic, savedDeliveryAddress, 
        savedPhone,savedInn, cart);
    } catch (error) {
      console.error('Ошибка при создании платежа:', error);
      setError('Произошла ошибка при создании платежа');
    } finally {
      setIsLoading(false);
      clearCart();
    }
  };

  const [emailSent, setEmailSent] = useState(false); // Флаг для отслеживания отправки письма
  
  const sendOrderConfirmation = async (email, firstname, surname, 
    patronymic, deliveryAddress, phone,inn, cartItems) => {
    const emailData = {
      recipient_email: email,
      subject: 'Подтверждение заказа',
      items: cartItems.map(item => ({
        name: item.name,
        cost: item.retailPrice > 0 ? item.quantity * item.retailPrice >= 50000 ? item.wholesalePrice : item.retailPrice : 0,
        count: item.quantity
      })),
      firstname,
      surname,
      patronymic,
      address: deliveryAddress,
      phone,
      inn,
    };
  
    try {
      const resp = await axios.post(`${API_BASE_URL}/mailing/send-email/`, emailData);
      setEmailSent(resp?.status)
    } catch (error) {
      console.error('Ошибка при отправке подтверждения заказа:', error);
    }
  };
  

  if (emailSent === 200) {
    return (
      <div className={styles.cart}>
        <h2>Заказ успешно сформирован</h2>
        <p>Спасибо за ваш заказ!</p>
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
          <div className={styles.clientTypeSelector}>
  <button 
    type="button"
    className={clientType === 'physical' ? styles.active : ''}
    onClick={() => setClientType('physical')}
  >
    Физическое лицо
  </button>
  <button
    type="button" 
    className={clientType === 'legal' ? styles.active : ''}
    onClick={() => setClientType('legal')}
  >
    Юридическое лицо
  </button>
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
            </div> {clientType === 'legal' && (
    <div className={styles.formField}>
      <label htmlFor="inn">ИНН:</label>
      <input
        type="text"
        id="inn"
        value={inn}
        onChange={handleInnChange}
        placeholder="Введите ИНН"
        required
      />
    </div>
  )}
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
                <option value="Минеральные воды, ул. Новосёлов, 9А">Минеральные воды, ул. Новосёлов, 9А</option>
                <option value="Пункт выдачи Пятигорск, ул. Украинская, 34">Пункт выдачи Пятигорск, ул. Украинская, 34</option>
                <option value="Пункт выдачи г. Ессентуки, ул. Советская, 67А">Пункт выдачи г. Ессентуки, ул. Советская, 67А</option>
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
            onClick={handlePaymentConfirm}
            disabled={isLoading || !isEmailValid || !email || !firstName || !lastName || !deliveryAddress || !isPhoneValid || !phone}
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