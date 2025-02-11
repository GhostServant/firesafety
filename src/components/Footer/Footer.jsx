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
                <a href="tel:+79283500201" className={styles.contactLink}>+7 (928) 350-02-01</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <img src={EmailIcon} alt="Email" className={styles.icon} />
              <a href="mailto:sistemask26@mail.ru" className={styles.contactLink}>sistemask26@mail.ru</a>
            </div>
            <div className={styles.contactItem}>
              <img src={AddressIcon} alt="Address" className={styles.icon} />
              <p className={styles.addressText}>Минеральные воды, ул.Новосёлов 9А</p>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Заказать услугу</h3>
            <button className={styles.ctaButton} onClick={handleToServices}>Оставить заявку</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;