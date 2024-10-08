import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../data/servicesList';
import styles from './ServicesItem.module.scss';
import OrderForm from './../OrderForm/OrderForm';
import Modal from './../Modal/Modal';
import FireExtinguisherTable from './../FireExtinguisherTable/FireExtinguisherTable';

const PriceCalculator = () => {
  const [area, setArea] = useState('');
  const [price, setPrice] = useState(0);

  const calculatePrice = (value) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setPrice(numValue * 30);
    } else {
      setPrice(0);
    }
  };

  const handleAreaChange = (e) => {
    const value = e.target.value;
    setArea(value);
    calculatePrice(value);
  };

  return (
    <div className={styles.calculator}>
      <h3 className={styles.calculatorTitle}>Калькулятор стоимости</h3>
      <div className={styles.calculatorContent}>
        <input
          type="number"
          value={area}
          onChange={handleAreaChange}
          placeholder="Введите площадь (м²)"
          className={styles.calculatorInput}
        />
        <p className={styles.calculatorResult}>
          Стоимость: {price.toFixed(2)} руб.
        </p>
      </div>
    </div>
  );
};

const ServicesItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name } = useParams();
  const service = services.find(s => s.linkTo === `/services/${name}`);

  if (!service) {
    return <div className={styles.notFound}>Услуга не найдена</div>;
  }

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const showCalculator = name === 'fire-protective-coating';
  const showFireExtinguisherTable = name === 'fire-extinguisher-recharging';

  return (
    <div className={styles.servicePage}>
      <div className={styles.container}>
        <h1 className={styles.title}>{service.name}</h1>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={service.imageSrc} alt={service.name} className={styles.image} />
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{service.fullDescription}</p>
            <button className={styles.orderButton} onClick={handleOrderClick}>Заказать услугу</button>
          </div>
        </div>
        {showCalculator && <PriceCalculator />}
        {showFireExtinguisherTable && <FireExtinguisherTable />}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <OrderForm
          serviceName={service.name}
          showPhone={false}
          showQuantity={false}
          showInn={true}
          scenario={3}
        />
      </Modal>
    </div>
  );
};

export default ServicesItem;