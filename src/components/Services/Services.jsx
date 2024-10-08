import { Link } from 'react-router-dom';
import styles from './Services.module.scss';
import { services } from './../../data/servicesList';

const ServiceCard = ({ service }) => (
  <Link to={service.linkTo} className={styles.card}>
    <img src={service.imageSrc || '/placeholder-image.jpg'} alt={service.name} className={styles.cardImage} />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{service.name}</h3>
      <p className={styles.cardDescription}>{service.shortDescription}</p>
    </div>
  </Link>
);

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Услуги</h1>
      <div className={styles.servicesGrid}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;