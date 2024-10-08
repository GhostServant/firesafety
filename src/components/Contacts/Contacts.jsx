import YandexMap from '../YandexMap/YandexMap';
import ContactInfo from './../ContactInfo/ContactInfo';
import CompanyInfo from './../CompanyInfo/CompanyInfo';
import styles from './Contacts.module.scss';

const Contacts = () => {
  const companyDescription = "Мы - ведущая организация в сфере пожарной безопасности, предоставляющая широкий спектр услуг по защите жизни и имущества от огня.";
  const contactInfo = {
    address: "г. Ессентуки, ул. Советская, 67А",
    phones: ["+7 (879) 343-67-34", "+7 (879) 343-67-35"],
    email: "vdpo.kmv@mail.ru"
  };
  const mapCenter = [44.044521, 42.858761];
  const mapZoom = 16;

  return (
    <div className={styles.contactsContainer}>
      <h2 className={styles.title}>Наши контакты</h2>
      <div className={styles.infoContainer}>
        <CompanyInfo description={companyDescription} />
        <ContactInfo {...contactInfo} />
      </div>
      <YandexMap center={mapCenter} zoom={mapZoom} />
    </div>
  );
};

export default Contacts;