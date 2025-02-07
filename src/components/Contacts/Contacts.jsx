import YandexMap from '../YandexMap/YandexMap';
import ContactInfo from './../ContactInfo/ContactInfo';
import CompanyInfo from './../CompanyInfo/CompanyInfo';
import styles from './Contacts.module.scss';

const Contacts = () => {
  const companyDescription = "Мы - ведущая организация в сфере пожарной безопасности, предоставляющая широкий спектр услуг по защите жизни и имущества от огня.";
  const contactInfo = {
    address: "Минеральные воды, ул.Новосёлов 9А",
    phones: ["+7 (928) 350-02-01"],
    email: "sistemask26@mail.ru"
  };
  const mapCenter = [44.044521, 42.858761];
  const mapZoom = 9;
  const locations = [
    { coordinates: [44.191635, 43.133156], type: "office", label: "Главный офис" },
    { coordinates: [44.044521, 42.858761], type: "pickup", label: "Пункт выдачи г. Ессентуки, ул. Советская, 67А" },
    { coordinates: [44.044422, 43.040459], type: "pickup", label: "Пункт выдачи Пятигорск, Украинская 34" },
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
