import styles from './ContactInfo.module.scss';

const ContactInfo = ({ address, phones, email }) => {
  return (
    <div className={styles.contactInfoContainer}>
      <h3>Контактная информация</h3>
      <p className={styles.infoItem}>Адрес: {address}</p>
      {phones.map((phone, index) => (
        <p key={index} className={styles.infoItem}>Телефон: {phone}</p>
      ))}
      <p className={styles.infoItem}>Email: {email}</p>
    </div>
  );
};

export default ContactInfo;