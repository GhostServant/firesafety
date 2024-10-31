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
  const mapZoom = 9;
  const locations = [
    { coordinates: [44.044521, 42.858761], type: "office", label: "Главный офис" },
    { coordinates: [44.191784, 43.129368], type: "pickup", label: "Пункт выдачи Минеральные Воды, Новоселов 9А" },
    { coordinates: [44.048087, 43.059196], type: "pickup", label: "Пункт выдачи Пятигорск, Украинская 34" },
  ];

  return (
    <div className={styles.contactsContainer}>
      <h2 className={styles.title}>Наши контакты</h2>
      <div className={styles.infoContainer}>
        <CompanyInfo description={companyDescription} />
        <ContactInfo {...contactInfo} />
      </div>
      <YandexMap center={mapCenter} zoom={mapZoom} locations={locations} />

      <div className={styles.legend}>
        <p><span className={styles.officeMarker}></span> — Главный офис</p>
        <p><span className={styles.pickupMarker}></span> — Пункты выдачи</p>
      </div>
    </div>
  );
};

export default Contacts;
