import { Link } from "react-router-dom";
import AddressIcon from './../../images/icon/address-icon.svg';
import PhoneIcon from './../../images/icon/phone-icon.svg';
import EmailIcon from './../../images/icon/email-icon.svg';
import styles from './Footer.module.scss';

function Footer() {
  const handleToServices = () => {
    window.location.href = '/services';
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Навигация</h3>
            <nav className={styles.footerNav}>
              <Link to="/" className={styles.navItem}>Главная</Link>
              <Link to="/catalog" className={styles.navItem}>Каталог</Link>
              <Link to="/services" className={styles.navItem}>Услуги</Link>
              <Link to="/contacts" className={styles.navItem}>Контакты</Link>
            </nav>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Контакты</h3>
            <div className={styles.contactItem}>
              <img src={PhoneIcon} alt="Phone" className={styles.icon} />
              <div className={styles.contactInfo}>
                <a href="tel:+78793436734" className={styles.contactLink}>+7 (879) 343-67-34</a>
                <a href="tel:+78793436735" className={styles.contactLink}>+7 (879) 343-67-35</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <img src={EmailIcon} alt="Email" className={styles.icon} />
              <a href="mailto:vdpo.kmv@mail.ru" className={styles.contactLink}>vdpo.kmv@mail.ru</a>
            </div>
            <div className={styles.contactItem}>
              <img src={AddressIcon} alt="Address" className={styles.icon} />
              <p className={styles.addressText}>г. Есентуки, ул. Советская, 67А</p>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Заказать услугу</h3>
            <button className={styles.ctaButton} onClick={handleToServices}>Оставить заявку</button>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>© 2006-2024 «Магазин 01». Все права защищены.</p>
          <Link to="/privacy-policy" className={styles.policyLink}>Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;